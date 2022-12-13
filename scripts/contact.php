<?php
$url = "https://data.mongodb-api.com/app/data-ddrlk/endpoint/data/v1/action/insertOne";
if ((isset($_POST["firstName"])) && (isset($_POST["lastName"])) && (isset($_POST["email"])) && (isset($_POST["message"]))){
    $data = "{
        \" collection\" :\"inquiriesCollection\",
        \" database\":\"cs601db\",
        \"dataSource\":\"Cluster0\",
        \"document\": {
            \"email\": \"".$_POST["email"]."\",
            \"firstName\": \"".$_POST["firstName"]."\",
            \"lastName\": \"".$_POST["lastName"]."\",
            \"message\": \"".$_POST["message"]."\"
        }
    }";
	
    CallAPI("POST",$url,$data);
}

function CallAPI($method, $url, $data = false)
{
    try{
        $curl = curl_init();

        switch ($method)
        {
            case "POST":
                curl_setopt($curl, CURLOPT_POST, 1);

                if ($data)
                    curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
                break;
            case "PUT":
                curl_setopt($curl, CURLOPT_PUT, 1);
                break;
            default:
                if ($data)
                    $url = sprintf("%s?%s", $url, http_build_query($data));
        }

        // Optional Authentication:
        curl_setopt($curl,CURLOPT_HTTPHEADER,array('Content-Type: application/json', 'api-key: pGHLy7KGbaptMvq9tZYMwnteEWBMg10n2Ew0eX2YzxnFdm5rLj0l3kPK2CtjVyuz'));
        curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_ANY);
        // curl_setopt($curl, CURLOPT_USERPWD, "username:password");
        curl_setopt($curl, CURLOPT_URL, $url);

        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

        $result = curl_exec($curl);
	
        curl_close($curl);
	
        return $result;
    }
    catch(PDOException $e){
        echo "ERROR: ".$e->getMessage();
    }

}

function redirect($url, $statusCode = 303)
{
   header('Location: ' . $url, true, $statusCode);
   die();
}
Redirect('/CS601%20Final%20Project/index.html', false);
?>