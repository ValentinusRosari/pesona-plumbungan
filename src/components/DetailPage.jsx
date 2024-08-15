import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import SampleImage from "../images/BukitBandung.jpg";
import BukitBandung from "../images/BukitBandung.jpg";
import TebingNdampar from "../images/TebingNdampar.jpg";
import WatuPanjang from "../images/WatuPanjang.jpg";
import GoaNyemono from "../images/GoaNyemono.jpg";
import BukitBrenggolo from "../images/BukitBrenggolo.jpg";
import PantaiNgambur from "../images/PantaiNgambur.jpg";
import BersihDesa from "../images/BersihDesa.jpg";
import Tayub from "../images/Tayub.jpg";
import Persatu from "../images/Persatu.jpg";
import TariKreasi from "../images/TariKreasi.jpg";
import MakamPundung from "../images/MakamPundung.jpg";
import WadahDupa from "../images/WadahDupa.jpg";

const DetailPage = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = {
    "tebing-ndampar": {
      title: "Tebing Ndampar",
      image: TebingNdampar,
      description:
        "Terletak di pantai selatan Pulau Jawa, tepatnya di Desa Plumbungan, Kabupaten Pacitan, Tebing Ndampar adalah permata tersembunyi yang memikat dengan keindahan alam yang menawarkan suasana tenang. Dengan deretan tebing yang terpahat indah, perairan biru kehijauan, dan pemandangan yang menakjubkan, pantai ini cocok untuk semua baik pecinta alam, penggemar petualangan, maupun mereka yang mencari relaksasi. Tebing Ndampar Pacitan dapatdianggap sebagai surga alam yang belum terjamah. Sebagian besar pantai ini belum tersentuh oleh komersialisasi, sehingga keindahannya yang murni tetap utuh. Salah satu daya tarik utama Tebing Ndampar Pacitan bisa di menfaatkan sebagai potensi wisata. Tebingnya yang lias sering dijadikan spot pemancingan favorit. Selain manving, tebing ndampar bisa digunakan untuk bercamping.",
      map: "https://maps.app.goo.gl/anNTAFN4mAdEFWh69",
    },
    "bukit-brenggolo": {
      title: "Bukit Brenggolo",
      image: BukitBrenggolo,
      description:
        "Bukit Brenggolo merupakan salah satu bukit yang ada di Dusun Tenggar, Desa Plumbungan, Kecamatan Kebonagung, Kabupaten Pacitan. Medan untuk menuju puncak Bukit Brenggolo tidak terlalu sulit, namun harus tetap berhati-hati karena banyak guguran dedaunan yang cukup licin. Dari puncak bukit pengunjung dapat menikmati pemandangan kota Pacitan sekaligus hamparan lautan. Selain bisa melihat pemandangan yang menyegarkan, pengunjung pun bisa menikmati sunset apabila cuaca mendukung. Pengunjung juga akan dimanjakan dengan semilir angin dan udara segar yang akan membuat suasana semakin nyaman. Bukit Brenggolo ini hampir sama dengan watu panjang. Yang membedakan dari kedua potensi tersebut adalah sudut pandang saat melihat pemandangan. Sehingga keduanya merupakan potensi yang harus di kembangkan.",
      map: "https://maps.app.goo.gl/KJ1aXzhuYHDkGFSG6",
    },
    "goa-nyemono": {
      title: "Goa Nyemono",
      image: GoaNyemono,
      description:
        "Dusun Nyemono memiliki potensi wisata kuliner yang besar berkat aliran air yang mengalir dari salah satu goa. Mayoritas penduduknya adalah nelayan yang bisa menjual hasil tangkapan seperti ikan dan lobster dengan nilai jual lebih tinggi melalui tempat kuliner. Makan di pinggir sungai yang bersih dan menyatu dengan alam saat ini sangat digemari oleh wisatawan. Mereka bisa mengabadikan momen, bermain air, atau bahkan mencoba flying fox. Goa dan sungai di Nyemono merupakan potensi wisata yang harus dikembangkan untuk menarik lebih banyak pengunjung dan meningkatkan pendapatan masyarakat setempat. Menggabungkan keindahan alam dengan kuliner lokal akan menjadi daya tarik unik bagi para wisatawan.",
    },
    "watu-panjang": {
      title: "Watu Panjang",
      image: WatuPanjang,
      description:
        "Berjalan menyusuri Watu Panjang yang berada di dusun Krajan desa Plumbungan memberikan sensasi yang berbeda. Udara segar pegunungan dan suara deburan ombak yang terdengar dari kejauhan menciptakan suasana damai dan menenangkan. Watu panjang ini akan lebih indah jika dinikmati pada pagi dan sore hari. Pagi hari yang sejuk dengan pemandangan indah dari pantai dan melihat kota pacitan dengan menyantap soto hangat merupakan pilihan yang sempurna untuk mengawali hari. Indahnya sunset pada sore hari ditambah dengan gemerlap lampu kota kecil yang cantik menjadikan watu panjang sebagai tempat healing yang menyenangkan. Potensi ini perlu sekali untuk di manfaatkan karena Watu Panjang bukan hanya sekedar objek wisata. Akan tetapi, ia adalah tempat untuk merasakan keajaiban alam dan menikmati keindahan yang masih alami dan belum terjamah oleh banyak orang.",
      map: "https://maps.app.goo.gl/F5hQ8i47tgfbTxrw6",
    },
    "bukit-bandung": {
      title: "Bukit Bandung",
      image: BukitBandung,
      description: "Bukit Bandung is a beautiful place with scenic views...",
      map: "https://maps.app.goo.gl/X5bDunBYURTsYwEw7",
    },
    "pantai-ngambur": {
      title: "Pantai Ngambur",
      image: PantaiNgambur,
      description:
        "Terletak berjejeran dengan pantai Ndampar, pantai Ngambur merupakan potensi wisata lagi dari desa Plumbungan. bentuknya seperti tebing mendjadikan pantai Ngambur sebagai tempat yang cocok untuk memancing, berkemah, dan juga sekedar melihat pemandangan. dari tebing ini kita juga bisa melihat aktivitas para nelayan yang sedang mencari ikan, lobster dan hasil laut lainnya. pantai ngambur merupakan potensi wisata yang harus di kembangkan, banyak hal yang bisa di manfaatkan untuk menambah nilai ekonomi. terdapat mercusuar sebagai ciri khas yang dimiliki oleh pantai ngambur. dari atas mercusuar kita bisa melihat keindahan alam yang ada di pacitan.",
      map: "https://maps.app.goo.gl/J3Rx6dpypS857vo58",
    },
    "bersih-desa": {
      title: "Bersih Desa",
      image: BersihDesa,
      description:
        "Longkangan adalah upacara adat yang dikenal sebagai masyarakat Dusun Nyemono di Dusun Nyemono dalam bulan Longkang, Selo, dan Dzulqo'dah. Tradisi menjadi momentum bagi warga desa untuk mengungkapkan rasa syukur kepada Tuhan atas berkah dan keselamatan yang telah diterima, serta harapan agar kehidupan desa selalu dalam kondisi sejahtera dan lancar di masa depan. Tradisi longkangan dilakukan secara gotong royong, mencerminkan nilai-nilai kebersamaan dan solidaritas di antara warga. It juga memahami keseimbangan dan harmoni antara manusia, alam, dan leluhur, menciptakan momen refleksi dan pembaruan untuk kehidupan yang lebih baik.",
    },
    tayub: {
      title: "Tayub",
      image: Tayub,
      description:
        "Tayub adalah bentuk tarian tradisional dari Jawa, yang berasal dari kata 'ditata supaya guyub.' Tarian ini merupakan bentuk musik yang bertujuan untuk menjaga hubungan sosial dan menciptakan kerukunan antar anggota masyarakat. Alat musik tradisional yang digunakan dalam tarian tayub meliputi musik gamelan, seperti kendang, bonang barong, dan gong. Tariannya beragam, mulai dari tarian tayub tradisional seperti sinom, pangkur, dan subokastowo hingga tarian modern. Tarian tayub sering kali menggabungkan elemen-elemen seperti lembehan, penthangan, dan jogetan, yang mengedepankan keharmonisan dan persatuan.",
    },
    persatu: {
      title: "Persaudaraan Rasa Tunggal",
      image: Persatu,
      description:
        "Persaudaraan Rasa Tunggal, Pencak Silat, dan Tenaga Dalam adalah seni bela diri yang berakar di Madiun, Jawa Timur. Organisasi ini fokus pada latihan Pencak Silat sebagai seni bela diri tradisional Indonesia, dengan prinsip-prinsip yang mencerminkan persaudaraan dan persatuan di antara anggotanya. Tujuan utama Persaudaraan Rasa Tunggal adalah memupuk persatuan dan kesatuan di antara anggotanya melalui latihan Pencak Silat dan prinsip-prinsip yang dianut. Organisasi ini berusaha untuk mempromosikan dan melestarikan Pencak Silat tradisional serta membina semangat positif di kalangan pemuda. Dengan demikian, Persaudaraan Rasa Tunggal tidak hanya menjadi sarana latihan bela diri tetapi juga wadah untuk membangun karakter dan persaudaraan di masyarakat.",
    },
    "tari-kreasi": {
      title: "Tari Kreasi",
      image: TariKreasi,
      description:
        "Tari kreasi adalah jenis tarian yang merupakan hasil dari kreativitas para penari yang menggabungkan unsur-unsur tradisional dengan inovasi baru. Tarian ini bisa mencakup berbagai elemen seperti gerakan, kostum, musik, dan tema yang diambil dari budaya tradisional, tetapi kemudian dimodifikasi atau ditambahkan elemen modern untuk menciptakan sesuatu yang segar dan baru. Tari kreasi bertujuan untuk menjaga warisan budaya sambil memberikan ruang bagi ekspresi artistik yang lebih bebas dan adaptif terhadap perkembangan zaman. Ini sering digunakan sebagai sarana untuk mengekspresikan identitas budaya dan sebagai cara untuk menarik minat generasi muda terhadap seni tari tradisional.",
    },
    "makam-pundung": {
      title: "Makam Pundung",
      image: MakamPundung,
      description:
        "Makam Pundung di Dusun Nyemono, Desa Plumbungan, adalah salah satu situs makam yang berupa gundukan tanah atau bukit kecil. Makam ini memiliki nilai historis tersendiri karena terkait dengan tokoh yang dihormati oleh masyarakat Dusun Nyemono.",
    },
    "wadah-dupa": {
      title: "Wadah Dupa",
      image: WadahDupa,
      description: "",
    },
  };

  const detail = data[id] || {
    title: "Unknown Location",
    image: SampleImage,
    description: "No information available for this location.",
  };

  return (
    <section
      className="relative bg-cover bg-center py-16"
      style={{ backgroundImage: `url(${detail.image})`, minHeight: "100vh" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container relative z-10 mx-auto px-4 h-full flex flex-col items-center justify-center text-white lg:mt-24">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 mt-8 text-center">
          {detail.title}
        </h2>
        <p className="max-w-2xl text-center text-sm md:text-base lg:text-lg mb-8">
          {detail.description}
        </p>
        {detail.map && (
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
            <a href={detail.map} target="_blank" rel="noopener noreferrer">
              Google Maps
            </a>
          </button>
        )}
      </div>
    </section>
  );
};

export default DetailPage;
