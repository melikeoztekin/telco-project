# Telcom Angular Project
[kodlama.io](https://www.kodlama.io/) tarafından misafir öğrenci olarak katıldığım akademi eğitimi sürecinde ödevler ve geliştirilmesi gereken projeler kapsamında ***Telcom Project*** adlı **Angular** projesini geliştirmekteyim.

## 💻Projenin kurulumu
- 🔧NodeJS İndirme/Kurulum
  - [NodeJS indirmek için](https://nodejs.org/tr/download/current/)
  - Windows/IOS için NodeJS yükleyicisini indirilir ve kurulur.
  > NodeJS JavaScript komutlarının server tarafında işlenmesini sağlamakla yükümlü olan uygulamadır.
  - Node.js kurulumu tamamlandıktan sonra terminalde `node -v` komut yazılarak versiyon kontrolü yapılabilir.
  
- 🔧TypeScript Compiler İndirme/Kurulum
  >NodeJS, TypeScript Compiler’ını kurmamızı hemde TypeScript Compiler’ın yazmış olduğumuz kodlarımızı JavaScript kodlarına dönüştürme aşamasında görev alacaktır.
  -Terminal ekranında `npm install -g typescript` komutunu yazarak yükleme işlemini başlatalım.
  
- 🔧Angular CLI İndirme/Kurulum
  - [ANGULAR](https://cli.angular.io/) sayfasında yer alan komutlardan ilerleyerek kuruluma başlayabiliriz.
  - Terminal ekranında `npm install -g @angular/cli` komutunu yazarak yükleme işlemini başlatalım.
  - Doğru kurulum olduğunu teyit etmek için terminal ekranına `ng v` yazalım ve angular versiyonunu görüntüleyelim.

- 🔧Proje Dosyasını İndirme/Kurulum ve Başlatma
  - Proje dosyasını .zip olarak bilgisayara indirebiliriz.
  - indirilen dosya içerisinde package.json dosyasında yer alan paketlerin kurulumu için proje klasörüne terminal ekranında yerleşelim ve `npm install` diyerek github tarafından varsayılan olarak repo içerisinde yüklenmeyen node_modules dosyasının indirilmesini gerçekleştirelim.
  - İndirme işlemi tamamlandıktan sonra yine terminal ekranında `ng serve --open` komutu ile projeyi tarayıcıda çalıştıralım.
  - Angular projesi localde çalışırken özelleştirme yapılmamış ise `localhost:4200` adresi ile çalışacaktır.
  
- 🔧Projede API dosyası İndirme/Kurulum ve Başlatma
  - Proje dosyasını .zip olarak bilgisayara indirdiğimizde src/assets/ klasörü altında yer alan `telco-json-server` api dosyası olarak karşımıza çıkar.
  - `npm install` diyerek node_modules dosyasının api işlemi içinde indirilmesini gerçekleştirelim.
  - İndirme işlemi tamamlandıktan sonra yine terminal ekranında `npm install` komutu ile apiyi çalıştıralım.
  - API localde çalışırken özelleştirme yapılmamış ise `localhost:3000` adresi ile çalışacaktır.
