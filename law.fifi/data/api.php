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
			break;

		case 'animals_all':
			return makeQuery($c,"SELECT * FROM track_animals",[]);
			break;

		case 'locations_all':
			return makeQuery($c,"SELECT * FROM track_locations",[]);
			break;

		case 'user_by_id':
			return makeQuery($c,"SELECT * FROM track_users WHERE id =?",$p);
			break;

		case 'animal_by_id':
			return makeQuery($c,"SELECT * FROM track_animals WHERE id =?",$p);
			break;

		case 'location_by_id':
			return makeQuery($c,"SELECT * FROM track_locations WHERE id =?",$p);
			break;

		case 'animals_by_user_id':
			return makeQuery($c,"SELECT * FROM track_animals WHERE user_id =?",$p);
			break;

		case 'locations_by_animal_id':
			return makeQuery($c,"SELECT * FROM track_locations WHERE animal_id =?",$p);
			break;
		
		case "check_signin":
        	return makeQuery($c,"SELECT * FROM track_users WHERE username =? AND password =md5(?)",$p);
        	break;

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


            case "animal_profile_and_notes":
        	return makeQuery($c,"SELECT * FROM
            `track_animals` a
            LEFT JOIN (
               SELECT animal_id, photo, description FROM `track_locations`
               ORDER BY `date_create` DESC
            ) l
            ON a.id = l.animal_id
            WHERE animal_id = ?
      		GROUP BY l.animal_id
            ",$p);

		default:
			return ["error"=>"No Matched Type"];
			break;
	}
}

$data = json_decode(file_get_contents("php://input"));


echo json_encode(
	makeStatement($data),
	JSON_NUMERIC_CHECK
);