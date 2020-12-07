<?php


function makeConn() {
   include_once "auth.php";
   try {
      $conn = new PDO(...Auth());
      $conn->setAttribute(
         PDO::ATTR_ERRMODE,
         PDO::ERRMODE_EXCEPTION
      );
   } catch(PDOException $e) {
      die($e);
   }

   return $conn;
}


function fetchAll($r){
	$a =[];

	while($row = $r-> fetch(PDO::FETCH_OBJ))
		$a[]=$row;
	return $a;
}

//c=connection, ps = prepared statement, p= parameters
function makeQuery($c,$ps,$p, $makeResults=true){
	try{
		if(count($p)){
			$stmt = $c-> prepare($ps);
			$stmt-> execute($p);

		}else{
			$stmt = $c-> query($ps);
		}
		$r = $makeResults? fetchAll($stmt):[];

		return [
			"result"=>$r
		];

	}catch(PDOException $e) {
      return [
      	"error"=> "Query Failed:" .$e->getMessage()
      ];
	}
}


function makeStatement($data){

	$c = makeConn();
	$t = @$data->type;
	$p = @$data->params;

	switch ($t) {
		case 'users_all':
			return makeQuery($c,"SELECT * FROM track_users",[]);
			

		case 'animals_all':
			return makeQuery($c,"SELECT * FROM track_animals",[]);
			

		case 'locations_all':
			return makeQuery($c,"SELECT * FROM track_locations",[]);
			

		case 'user_by_id':
			return makeQuery($c,"SELECT * FROM track_users WHERE id =?",$p);
			

		case 'animal_by_id':
			return makeQuery($c,"SELECT * FROM track_animals WHERE id =?",$p);
			

		case 'location_by_id':
			return makeQuery($c,"SELECT * FROM track_locations WHERE id =?",$p);
			

		case 'animals_by_user_id':
			return makeQuery($c,"SELECT * FROM track_animals WHERE user_id =?",$p);
			

		case 'locations_by_animal_id':
			return makeQuery($c,"SELECT * FROM track_locations WHERE animal_id =?",$p);
			
		
		case "check_signin":
        	return makeQuery($c,"SELECT * FROM track_users WHERE username =? AND password =md5(?)",$p);

    	case "check_signup":
    		return makeQuery($c,"SELECT * FROM track_users WHERE username =? ",$p);

        case "check_signup_email":
    		return makeQuery($c,"SELECT * FROM track_users WHERE email =?",$p);

        case "recent_locations":
        	return makeQuery($c,"SELECT * FROM
            `track_animals` a
            LEFT JOIN (
               SELECT * FROM `track_locations`
               ORDER BY `date_create` DESC
            ) l
            ON a.id = l.animal_id
            WHERE user_id = ?
            GROUP BY l.animal_id
            ",$p);



        case "search_animals":
        	$p=["%$p[0]%", $p[1]];

        	return makeQuery($c,"SELECT * FROM
            `track_animals` 
            WHERE
            `name`LIKE ?
            AND user_id = ?
            ",$p);



        case "search_animals_map":
        	$p=["%$p[0]%", $p[1]];

        	return makeQuery($c,"SELECT * FROM
            `track_animals` a
            LEFT JOIN (
               SELECT * FROM `track_locations`
               ORDER BY `date_create` DESC
            ) l
            ON a.id = l.animal_id
            	WHERE 
            	a.name LIKE ?
            	AND a.user_id = ?
            GROUP BY l.animal_id
            ",$p);


        case "animal_filter":
        	return makeQuery($c,"SELECT * FROM
            `track_animals` 
            WHERE
            `$p[0]` =?
            AND user_id = ?
            ",[$p[1],$p[2]]);


         case "animal_sort":
        	return makeQuery($c,"SELECT * FROM
            `track_animals` 
            ORDER BY `$p[0]` $p[1]
            WHERE
            user_id = ?
            ",[$p[1],$p[2]]);
        	
        	


        case "animal_status":
        	return makeQuery($c,"SELECT * FROM
            `track_animals` a
            LEFT JOIN (
               SELECT * FROM `track_locations`
               ORDER BY `date_create` DESC
            ) l
            ON a.id = l.animal_id
            WHERE animal_id = ?
            GROUP BY l.animal_id
            ",$p);
        	






            //CRUD
            //INSERT

        case "insert_user":
         $r = makeQuery($c,"SELECT * FROM `track_users` WHERE `username` = ? OR `email` = ?",[$p[0],$p[1]]);
         	if(count($r['result']))return ['error'=>"Username or Email already exists"];

         $r = makeQuery($c,"INSERT INTO
            `track_users`
            (`username`,`email`,`password`,`img`,`date_create`,`firstname`,`lastname`,`gender`,`location`,`bio`,`initial`)
            VALUES
            (?, ?, md5(?), 'https://via.placeholder.com/400/?text=USER', NOW(),'','','','','','')
            ",$p,false);
         if(isset($r['error'])) return $r;
         return ["id"=>$c->lastInsertId()];



         case "insert_animal":
         	 $r = makeQuery($c,"INSERT INTO
            `track_animals`
            (`user_id`,`name`,`gender`,`breed`,`color`,`coat`,`size`,`neutered`,`description`,`img`,`date_create`)
            VALUES
            (?,?, ?,?,?,?,?,?,?, 'https://via.placeholder.com/400/?text=CAT', NOW())
            ",$p,false);
         if(isset($r['error'])) return $r;
         return ["id"=>$c->lastInsertId()];




         case "insert_location":
         	 $r = makeQuery($c,"INSERT INTO
            `track_locations`
            (`animal_id`,`lat`,`lng`,`status`,`description`,`photo`,`icon`,`date_create`)
            VALUES
            (?,?,?,?,?, 'https://via.placeholder.com/400/?text=LOCATION','images/map.svg', NOW())
            ",$p,false);
         if(isset($r['error'])) return $r;
         return ["id"=>$c->lastInsertId()];



         // UPDATE


         case "update_cat":
         $r = makeQuery($c,"UPDATE
            `track_animals`
            SET
            	`name`=?,
            	`gender`=?,
            	`breed`=?,
            	`color`=?,
            	`coat`=?,
            	`size`=?,
            	`neutered`=?,
            	`description`=? 
           
            WHERE `id` =?
            ",$p,false);
      
         return ["result"=>"success"];



         case "update_user":
		$r= makeQuery($c, "UPDATE `track_users` 
			SET 
			
			`firstname`=?,
			`lastname`=?,
			`username`=?,
			`email`=?,
			`gender`=?,
			`location`=?,
			`bio`=?

			WHERE `id` =?
			",$p,false);
		return ["result"=>"success"];



		// DELETE
		case "delete_cat":
         return makeQuery($c,"DELETE FROM `track_animals` WHERE `id` =?",$p,false);

         case "delete_location":
         return makeQuery($c,"DELETE FROM `track_locations` WHERE `id` =?",$p,false);





		case "signup_add_user_info":
		$r= makeQuery($c, "UPDATE `track_users` 
			SET 
			
			`firstname`=?,
			`lastname`=?,
			`gender`=?,
			`location`=?,
			`bio`=?

			WHERE `id` =?
			",$p,false);
		return ["result"=>"success"];


		default:
			return ["error"=>"No Matched Type"];
			
	}
}

$data = json_decode(file_get_contents("php://input"));


echo json_encode(
	makeStatement($data),
	JSON_NUMERIC_CHECK
);