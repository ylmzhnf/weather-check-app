# ☁️ HAVA DURUMU KONTROL UYGULAMASI (Weather Check App)

**Node.js**, **Express.js** ve **EJS** ile geliştirilmiş, kullanıcıdan alınan şehir adına göre anlık hava durumu verilerini **OpenWeatherMap API** üzerinden çeken minimalist bir Server-Side Rendering (SSR) web uygulamasıdır.

---

## 📋 İçindekiler (Table of Contents)

- [Genel Bakış](#✨-genel-bakış)
- [Kurulum ve Çalıştırma](#⚙️-kurulum-ve-Çalıştırma)
- [Teknik Detaylar](#💻-teknik-detaylar)
  - [Teknolojiler](#🛠️-teknolojiler)
  - [Rotalar (Routing)](#🌐-rotalar-routing)
  - [Veri İşleme ve Hata Yönetimi](#📊-veri-İşleme-ve-hata-yönetimi)
- [Gelecek İyileştirmeler](#🚀-gelecek-İyileştirmeler)
- [İletişim](#📫-İletişim)

---

## ✨ Genel Bakış

Bu proje, temel sunucu tarafı renderlama (SSR) ve üçüncü taraf API entegrasyonu becerilerini göstermeye odaklanmıştır. Uygulama, arama çubuğuna girilen şehrin anlık hava durumunu çekerek, metrikleri (sıcaklık, rüzgar hızı, nem, bulutluluk) kullanıcı dostu bir arayüzde sunar.

* **Mimari:** Node.js ve Express ile hızlı API çağrısı ve EJS ile dinamik sayfa oluşturma.
* **Tasarım:** Veri okunurluğunu artıran temiz, ikon tabanlı bir arayüze sahiptir.

---

## ⚙️ Kurulum ve Çalıştırma

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

1.  **Gereksinimler:** Node.js ve npm'in kurulu olduğundan emin olun.
2.  **Repo'yu Klonlayın:**
    ```bash
    git clone [Proje GitHub Adresi Buraya Eklenecek]
    cd weather-check-app
    ```
3.  **Bağımlılıkları Yükleyin:**
    ```bash
    npm install
    ```
4.  **API Anahtarını Ayarlayın:** Projenizin ana dizininde **`.env`** adında bir dosya oluşturun ve OpenWeatherMap API anahtarınızı buraya ekleyin:
    ```
    APIKey="[SİZİN_OPENWEATHERMAP_ANAHTARINIZ]"
    ```
5.  **Uygulamayı Başlatın:**
    ```bash
    node index.js
    ```
6.  Tarayıcınızı açın ve `http://localhost:3000` adresine gidin.

---

## 💻 Teknik Detaylar

### 🛠️ Teknolojiler (Tech Stack)

* **Backend Runtime:** Node.js
* **Web Framework:** Express.js
* **API İstemcisi:** Axios
* **Şablonlama:** EJS (Embedded JavaScript)
* **Veri Kaynağı:** OpenWeatherMap API (`/data/2.5/weather` endpoint)
* **Yapılandırma:** Dotenv (API anahtarını gizlemek için)
* **Styling & İkon:** Custom CSS ve Font Awesome.

### 🌐 Rotalar (Routing)

Uygulamanın temel işlevleri, `index.js` dosyasında tanımlanan aşağıdaki iki rota üzerinden yönetilir:

| İşlev | Rota | HTTP Metodu | Açıklama |
| :--- | :--- | :--- | :--- |
| Ana Sayfa | `/` | `GET` | Uygulamanın arama formuyla birlikte başlangıç sayfasını render eder. |
| Hava Durumu Sorgulama | `/weather` | `POST` | Kullanıcının girdiği şehir adına API isteği yapar, veriyi çeker ve sayfayı günceller. |

### 📊 Veri İşleme ve Hata Yönetimi

* **Veri Birimleri:** API isteğinde `&units=metric` kullanıldığı için sıcaklık **Celcius (°C)** ve rüzgar hızı **metre/saniye (m/s)** cinsinden gösterilir.
* **Gösterilen Metrikler:** Şehir adı, sıcaklık, hava durumu açıklaması, rüzgar hızı, nem oranı ve bulutluluk oranı çekilir ve EJS ile ekrana yansıtılır.
* **Hata Kontrolü:** Şehir girişi yapılmadığında veya API geçersiz bir şehir için veri döndürdüğünde kullanıcıya net bir hata mesajı (`Lütfen şehir giriniz!` veya `Hava durumu bilgisi alınamadı!`) gösterilir.

---

## 🚀 Gelecek İyileştirmeler (Future Improvements)

* [ ] Haftalık tahminleri göstermek için API çağrısını (`/forecast` veya `One Call`) entegre etmek.
* [ ] API isteğindeki `lang=en` parametresini `lang=tr` olarak değiştirerek hava durumu açıklamalarının Türkçe dönmesini sağlamak.
* [ ] Hava durumu ikon koduna göre (örn. bulutlu, güneşli) arayüz arka planını dinamik olarak değiştiren CSS sınıfları eklemek.
* [ ] Kullanıcı deneyimini artırmak için arama sırasında yükleniyor (loading) durumu göstermek.

---

## 📫 İletişim

**Email:** [ylmzhnf@gmail.com](mailto:ylmzhnf@gmail.com)
**LinkedIn:** [Hanife Yılmaz](https://www.linkedin.com/in/hanife-y%C4%B1lmaz-b9137b178/)
**GitHub:** [ylmzhnf](https://github.com/ylmzhnf)
**Frontend Mentor:** [@ylmzhnf](https://www.frontendmentes.io/profile/ylmzhnf)

---

© 2025 Hanife Yılmaz