<?php
fopen("data.json", 'w');

   function addLineToJSON($community, $district, $year, $country, $ammount)
    {
        $data = json_decode(file_get_contents("data.json"), true);
        if (!isset($data["$community"])) {
            $data["$community"] = array("district" => $district);
        }
        $data["$community"]["$year"][] = array("county" => $country, "ammount" => $ammount);
        file_put_contents('data.json', json_encode($data));
    }

    $file = "https://statistik.tg.ch/public/upload/assets/92713/Bev_Gemeinde_auslStaatsangeh_GrGruppen_2015_2019.csv";
    $array = file($file);

    $first = true;

    foreach ($array as $line) {
        if (!$first) {
            $data = explode(";", $line);
            $community = $data[1];
            $district = substr($data[3], 7);
            $year = $data[4];
            $country = $data[6];
            $ammount = $data[7];
            addLineToJSON($community, $district, $year, $country, $ammount);
        }
        $first = false;
    }
    ?>