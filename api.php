<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$pokemon = isset($_GET['name']) ? strtolower(trim($_GET['name'])) : 'pikachu';
$url = "https://pokeapi.co/api/v2/pokemon/{$pokemon}";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode === 200) {
    $dados = json_decode($response, true);

    echo json_encode([
        'success' => true,
        'nome' => ucfirst($dados['name']),
        'id' => $dados['id'],
        'imagem' => $dados['sprites']['other']['official-artwork']['front_default'] ?? $dados['sprites']['front_default'],
        'tipo' => $dados['types'][0]['type']['name'],
        'peso' => ($dados['weight'] / 10) . ' kg',
        'altura' => ($dados['height'] / 10) . ' m'
    ]);
} else {
    echo json_encode([
        'success' => false,
        'mensagem' => 'Pokémon não encontrado. Verifique o nome e tente novamente.'
    ]);
}
?>