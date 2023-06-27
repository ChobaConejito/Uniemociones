Webcam.attach( '#camara' );

camara = document.getElementById("camara");
      
  Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

function foto()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("resultado").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}

  console.log('ml5 version:', ml5.version);
  
  // Inicializa el método de clasificación de imagen con MobileNet

  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/IWH9-digH/model.json',modelLoaded);

  // Cuando se cargue el modelo
  function modelLoaded() {
    console.log('Model Loaded!');
  }
      
  function verificar()
  {
    img = document.getElementById('selfie_image');
    classifier.classify(img, gotResult);
  }


// Función que se ejecuta cuando obtenemos algún error en los resultados
function gotResult(error, results) {
  // Muestra el error en la consola
  if (error) {
    console.error(error);
  } else {
    // Los resultados están en un array ordenado por presición.
    console.log(results);
    document.getElementById("resultado1").innerHTML = results[0].label;
    document.getElementById("resultados2").innerHTML = results[0].confidence.toFixed(3);
  }
}
