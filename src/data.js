// ─────────────────────────────────────────────────────────────
//  Semua isi website ada di file ini.
//  Ganti teks, tautan, dan gambar di sini. Tidak perlu
//  menyentuh komponen React sama sekali.
//
//  Teks yang berbeda per bahasa ditulis dengan L("Indonesia", "English").
//  Teks yang sama di kedua bahasa (nama, perusahaan, teknologi)
//  cukup ditulis sebagai string biasa.
// ─────────────────────────────────────────────────────────────

const L = (id, en) => ({ id, en });

export const profile = {
  name: "Bagas Andi Aprilianto",
  role: "Telecommunications Engineer",
  location: L("Sidoarjo, Jawa Timur", "Sidoarjo, East Java"),
  email: "bagasandiaprilianto@gmail.com",
  avatar: "/photos/fotobagas.jpeg",
  // File CV untuk tombol unduh, satu per bahasa. Taruh di folder public/cv/
  cv: {
    id: "/cv/CV_Bagas Andi Aprilianto.pdf",
    en: "/cv/CV_Bagas Andi Aprilianto.pdf",
  },
};

// Kalimat perkenalan di bagian atas.
// Bagian bertipe "chip" akan tampil sebagai tautan dengan logo kecil.
export const intro = {
  id: [
    [
      {
        text: "Saya Bagas Andi Aprilianto, lulusan D4 Teknik Telekomunikasi dari Politeknik Elektronika Negeri Surabaya yang tinggal di Sidoarjo, Jawa Timur, dengan minat di Network Engineering, IoT, dan Embedded Systems.",
      },
    ],
    [
      { text: "Proyek akhir saya adalah " },
      { chip: "Sistem Peringatan Azan", href: "#proyek", initial: "A", color: "#1d4ed8" },
      { text: ", sistem streaming audio real-time berbasis ESP32 dengan komunikasi peer-to-peer." },
    ],
    [
      { text: "Saya juga pernah magang di " },
      { chip: "PT Kereta Api Indonesia", href: "#pengalaman", initial: "K", color: "#b91c1c" },
      { text: " dan " },
      { chip: "PT PLN Icon Plus", href: "#pengalaman", initial: "P", color: "#ca8a04" },
      { text: ", membantu instalasi, troubleshooting, dan pemeliharaan jaringan serta perangkat elektronik." },
    ],
    [
      { text: "Di luar studi, saya aktif di " },
      { chip: "Himpunan Mahasiswa Teknik Telekomunikasi PENS", href: "#pengalaman", initial: "H", color: "#0f766e" },
      { text: " dan senang mengembangkan proyek elektronik serta IoT sendiri di rumah." },
    ],
  ],
  en: [
    [
      {
        text: "I'm Bagas Andi Aprilianto, a Diploma IV Telecommunications Engineering graduate from Politeknik Elektronika Negeri Surabaya, based in Sidoarjo, East Java, with an interest in Network Engineering, IoT, and Embedded Systems.",
      },
    ],
    [
      { text: "My final project is " },
      { chip: "Azan Warning System", href: "#proyek", initial: "A", color: "#1d4ed8" },
      { text: ", a real-time audio streaming system built on ESP32 with peer-to-peer communication." },
    ],
    [
      { text: "I've also interned at " },
      { chip: "PT Kereta Api Indonesia", href: "#pengalaman", initial: "K", color: "#b91c1c" },
      { text: " and " },
      { chip: "PT PLN Icon Plus", href: "#pengalaman", initial: "P", color: "#ca8a04" },
      { text: ", helping with installation, troubleshooting, and maintenance of networks and electronic equipment." },
    ],
    [
      { text: "Outside of my studies, I'm active in the " },
      { chip: "PENS Telecommunications Student Association", href: "#pengalaman", initial: "H", color: "#0f766e" },
      { text: ", and I enjoy building my own electronics and IoT projects at home." },
    ],
  ],
};

export const experience = [
  {
    period: L("Jul 2025 – Des 2025", "Jul 2025 – Dec 2025"),
    role: L("Staf, Departemen Eksternal & Riset", "Staff, External & Research Department"),
    company: "PENS Telecommunications Student Association",
    note: L(
      "Berkontribusi pada kegiatan relasi eksternal dan riset, mendukung kolaborasi, komunikasi, dan inisiatif penelitian di himpunan.",
      "Contributed to external relations and research activities, supporting collaboration, communication, and research initiatives within the association."
    ),
  },
  {
    period: L("Jan 2025 – Jun 2025", "Jan 2025 – Jun 2025"),
    role: "Engineer Intern",
    company: "PT Kereta Api Indonesia (Persero) – UPT Workshop Sintelis Daop 8 Gubeng Surabaya",
    note: L(
      "Membantu teknisi dalam instalasi dan pemeliharaan teknis, troubleshooting perangkat elektronik, serta inspeksi peralatan di lapangan.",
      "Assisted technicians with technical installation and maintenance, troubleshooting electronic equipment, and field equipment inspection."
    ),
  },
  {
    period: L("Mei 2024 – Jul 2025", "May 2024 – Jul 2025"),
    role: L("Junior, Departemen Eksternal & Riset", "Junior, External & Research Department"),
    company: "PENS Telecommunications Student Association",
    note: L(
      "Mendukung kegiatan departemen terkait relasi eksternal, komunikasi, dan pengembangan riset.",
      "Supported departmental activities related to external relations, communication, and research development."
    ),
  },
  {
    period: "2024",
    role: L("Freelance Network Engineering", "Network Engineering Freelance"),
    company: "PT PLN Icon Plus – Sub Regional Jawa Bagian Timur",
    note: L(
      "Membantu instalasi dan pemeliharaan teknis, troubleshooting perangkat jaringan, serta inspeksi peralatan di lapangan.",
      "Assisted with technical installation and maintenance, troubleshooting network equipment, and field equipment inspection."
    ),
  },
  {
    period: L("Jul 2021 – Nov 2021", "Jul 2021 – Nov 2021"),
    role: "Technical Support Intern",
    company: "PT Fangbian Iskan Corporindo",
    note: L(
      "Membantu teknisi dalam instalasi dan pemeliharaan teknis, troubleshooting perangkat elektronik, serta inspeksi peralatan di lapangan.",
      "Assisted technicians with technical installation and maintenance, troubleshooting electronic equipment, and field equipment inspection."
    ),
  },
];

export const education = [
  {
    period: "2022 – 2026",
    degree: L("D4 Teknik Telekomunikasi (Sarjana Terapan)", "Diploma IV in Telecommunications Engineering"),
    school: "Politeknik Elektronika Negeri Surabaya (PENS)",
    note: L(
      "Program Studi Sarjana Terapan Teknik Telekomunikasi, Departemen Teknik Elektro. Proyek akhir tentang sistem streaming audio azan berbasis ESP32 dengan komunikasi peer-to-peer.",
      "Applied Bachelor's Program in Telecommunications Engineering, Department of Electrical Engineering. Final project on an ESP32-based azan audio streaming system with peer-to-peer communication."
    ),
  },
  {
    period: "2019 – 2022",
    degree: L(
      "SMK, Teknik Jaringan Akses Telekomunikasi",
      "Vocational High School, Telecommunications Access Network Engineering"
    ),
    school: "SMK Telkom Sidoarjo",
    note: L(
      "Lulus dengan predikat Istimewa pada Uji Kompetensi Instalasi Fiber Optik, dan meraih Juara 1 lomba Information Network Cabling tingkat Wilayah Kerja 1 Provinsi Jawa Timur.",
      "Graduated with an Excellent rating on the Fiber Optic Installation competency assessment, and won 1st place in the Information Network Cabling competition at the East Java Regional level."
    ),
  },
];

// Setiap proyek punya kartu di halaman utama dan popup detail saat diklik.
//  - "title": tulis sebagai string biasa (bukan L(...)) karena komponen
//    kartu/proyek menampilkannya langsung tanpa penerjemah t().
//  - status: "soon" (segera hadir) atau "live" (sudah rilis).
//  - images[0] dipakai sebagai sampul kartu; sisanya muncul di galeri popup.
//  - details: daftar paragraf. Tulis dengan L([...], [...]).
//  - href (opsional): tombol "Buka proyek" di popup. Hapus jika belum ada.
// Taruh gambar di public/projects/ (rasio 16:10 paling pas), misalnya kopi-kilat-1.jpg.
export const projects = [
  {
    slug: "azan-warning-system",
    title: "Sistem Peringatan Azan Berbasis ESP32",
    description: L(
      "Proyek akhir: sistem streaming audio azan dan kajian dari masjid ke rumah warga secara real-time lewat jaringan peer-to-peer ESP32.",
      "Final project: a real-time audio streaming system for azan and religious lectures from a mosque to residents' homes over a peer-to-peer ESP32 network."
    ),
    status: "live",
    year: "2026",
    role: L("Perancangan sistem dan pemrograman embedded", "System design and embedded programming"),
    stack: ["ESP32-S3", "ESP-NOW", "UDP", "Opus Codec", "AES-128-GCM"],
    details: L(
      [
        "Merancang dan mengembangkan sistem streaming audio real-time untuk mendistribusikan azan dan kajian dari masjid ke rumah-rumah warga menggunakan jaringan nirkabel peer-to-peer berbasis ESP32-S3.",
        "Audio dikompresi dengan Opus Codec dan dikirim lewat ESP-NOW serta UDP, kemudian dienkripsi dengan AES-128-GCM untuk keamanan transmisi. Sistem diuji lewat pengujian langsung untuk transmisi audio, pemutaran, dan keamanan sistem.",
      ],
      [
        "Designed and developed a real-time audio streaming system to distribute azan and religious lectures from a mosque to residents' homes using a peer-to-peer wireless network based on ESP32-S3.",
        "Audio is compressed with the Opus codec and sent over ESP-NOW and UDP, then encrypted with AES-128-GCM for transmission security. The system was validated through live testing of audio transmission, playback, and security.",
      ]
    ),
    images: [
      {
        src: "/projects/azan-warning-system/1.svg",
        alt: L(
          "Rangkaian ESP32 dengan modul audio dan speaker untuk penerima",
          "ESP32 circuit with an audio module and speaker for the receiver"
        ),
      },
      {
        src: "/projects/azan-warning-system/2.svg",
        alt: L("Proses perancangan casing perangkat penerima", "Design process for the receiver's casing"),
      },
      {
        src: "/projects/azan-warning-system/3.svg",
        alt: L(
          "Pengujian sistem langsung untuk transmisi audio dan keamanan",
          "Live system testing for audio transmission and security"
        ),
      },
    ],
  },
  {
    slug: "measuring-instrument",
    title: "Alat Ukur Tegangan & Arus untuk Radio Lokomotif",
    description: L(
      "Alat ukur tegangan dan arus berbasis ESP32 dengan integrasi Telegram, dikembangkan selama magang di PT Kereta Api Indonesia.",
      "An ESP32-based voltage and current measuring device with Telegram integration, built during an internship at PT Kereta Api Indonesia."
    ),
    status: "live",
    year: "2025",
    role: L("Perancangan rangkaian dan pemrograman embedded", "Circuit design and embedded programming"),
    stack: ["ESP32", "Sensor Ultrasonik", "Servo Motor", "Telegram Bot API"],
    details: L(
      [
        "Merancang rangkaian ESP32 dengan sensor ultrasonik, motor servo, indikator LED, dan integrasi Telegram sebagai bagian dari alat ukur tegangan dan arus untuk radio lokomotif.",
        "Mengembangkan program untuk mengelola pembacaan sensor dan komunikasi dengan Telegram, sehingga status alat dan kondisi pengukuran bisa dipantau dari jarak jauh.",
      ],
      [
        "Designed an ESP32 circuit with an ultrasonic sensor, a servo motor, an LED indicator, and Telegram integration as part of a voltage and current measuring instrument for locomotive radios.",
        "Developed the program to manage sensor readings and Telegram communication, so device status and measurement conditions could be monitored remotely.",
      ]
    ),
    images: [
      {
        src: "/projects/measuring-instrument/1.svg",
        alt: L(
          "Rangkaian ESP32 dengan sensor ultrasonik dan servo motor",
          "ESP32 circuit with an ultrasonic sensor and a servo motor"
        ),
      },
      {
        src: "/projects/measuring-instrument/2.svg",
        alt: L("Perakitan dan pengujian rangkaian elektronik", "Assembly and testing of the electronic circuit"),
      },
      {
        src: "/projects/measuring-instrument/3.svg",
        alt: L(
          "Antarmuka Telegram untuk memantau status alat",
          "Telegram interface for monitoring device status"
        ),
      },
    ],
  },
  {
    slug: "cat-feeder",
    title: "Pemberi Pakan Kucing Otomatis dengan Monitoring Telegram",
    description: L(
      "Alat pemberi pakan kucing otomatis berbasis Arduino Nano yang memantau tegangan, arus, dan status pakan secara real-time lewat LCD dan Telegram.",
      "An Arduino Nano-based automatic cat feeder that monitors voltage, current, and feed status in real time via an LCD and Telegram."
    ),
    status: "live",
    year: "2026",
    role: L("Proyek pribadi — elektronika dan pemrograman", "Personal project — electronics and programming"),
    stack: ["Arduino Nano", "LCD", "Sensor Arus & Tegangan", "Telegram Bot API"],
    details: L(
      [
        "Merancang skema rangkaian pengukuran tegangan dan arus sebagai acuan saat merakit alat, lalu mengembangkan program untuk membaca parameter elektrikal, mengolah data, dan menampilkan hasil pengukuran.",
        "Menambahkan layar LCD sebagai antarmuka nilai tegangan dan arus secara real-time, serta memakai Telegram untuk mengontrol pemberian pakan, melihat status alat, dan menerima notifikasi kondisi pakan.",
      ],
      [
        "Designed a voltage and current measurement schematic as a reference during assembly, then developed a program to read electrical parameters, process the data, and display the measurement results.",
        "Added an LCD interface for real-time voltage and current readings, and used Telegram to control feeding, check device status, and receive notifications about feed conditions.",
      ]
    ),
    images: [
      {
        src: "/projects/cat-feeder/1.svg",
        alt: L("Skema rangkaian pengukuran tegangan dan arus", "Voltage and current measurement schematic"),
      },
      {
        src: "/projects/cat-feeder/2.svg",
        alt: L("Perakitan komponen elektronik pemberi pakan", "Assembling the feeder's electronic components"),
      },
      {
        src: "/projects/cat-feeder/3.svg",
        alt: L("Tampilan LCD untuk nilai tegangan dan arus", "LCD display for voltage and current readings"),
      },
    ],
  },
  {
    slug: "papr-research",
    title: "Riset PKM-RE: Reduksi PAPR pada Sistem OFDM",
    description: L(
      "Riset teknik reduksi Peak Average to Power Ratio (PAPR) pada sistem OFDM untuk mendukung migrasi TV digital, didanai Program Kreativitas Mahasiswa (PKM-RE).",
      "Research on Peak Average to Power Ratio (PAPR) reduction techniques in OFDM systems to support digital TV migration, funded through the PKM-RE student research program."
    ),
    status: "live",
    year: "2024",
    role: L("Anggota tim riset", "Research team member"),
    stack: ["OFDM", "MATLAB", "Sinyal Digital"],
    details: L(
      [
        "Melakukan riset teknik reduksi PAPR pada sistem Orthogonal Frequency Division Multiplexing untuk mendukung proses migrasi TV digital, sebagai bagian dari tim PKM-RE beranggotakan lima mahasiswa PENS.",
        "Proyek ini mendapat pendanaan riset sebesar Rp7.000.000 dari Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi, dengan realisasi kegiatan mencapai 95%.",
      ],
      [
        "Conducted research on PAPR reduction techniques in Orthogonal Frequency Division Multiplexing systems to support the digital TV migration process, as part of a five-member PKM-RE team from PENS.",
        "The project received IDR 7,000,000 in research funding from Indonesia's Ministry of Education, Culture, Research, and Technology, reaching a 95% activity completion rate.",
      ]
    ),
    images: [
      {
        src: "/projects/papr-research/1.svg",
        alt: L("Tim riset PKM-RE saat presentasi", "PKM-RE research team during a presentation"),
      },
      {
        src: "/projects/papr-research/2.svg",
        alt: L("Capaian kegiatan riset PKM-RE", "PKM-RE research activity achievements"),
      },
      {
        src: "/projects/papr-research/3.svg",
        alt: L("Dokumentasi kegiatan riset", "Research activity documentation"),
      },
    ],
  },
];

// Sertifikasi. "href" dan "credentialId" boleh dihapus kalau tidak ada.
export const certifications = [
  {
    date: L("Mei 2026", "May 2026"),
    title: "PENS English Proficiency Test (PEPT)",
    issuer: "PENS Language and Culture Center",
    initial: "P",
    color: "#1d4ed8",
  },
  {
    date: "2026",
    title: "Intermediate Associate Network Administrator",
    issuer: "Digital Talent Academy – Komdigi & PENS",
    initial: "D",
    color: "#0e7490",
  },
  {
    date: "2026",
    title: "Fundamental of Associate Network Administrator",
    issuer: "Digital Talent Academy – Komdigi & PENS",
    initial: "D",
    color: "#0e7490",
  },
  {
    date: L("Jul 2026", "Jul 2026"),
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    initial: "C",
    color: "#0f766e",
  },
  {
    date: L("Apr 2022", "Apr 2022"),
    title: L(
      "Uji Kompetensi Keahlian – Instalasi Fiber Optik (predikat Istimewa)",
      "Competency Assessment – Fiber Optic Installation (Excellent rating)"
    ),
    issuer: "SMK Telkom Sidoarjo & PT Fangbian Iskan Corporindo",
    initial: "U",
    color: "#7c3aed",
  },
  {
    date: L("Jan 2022", "Jan 2022"),
    title: L(
      "Juara 1 LKS Wilayah Kerja 1 Jawa Timur – Information Network Cabling",
      "1st Place, Regional Skills Competition – Information Network Cabling"
    ),
    issuer: "SMK Telkom Sidoarjo",
    initial: "J",
    color: "#b45309",
  },
];

export const socials = [{ label: "LinkedIn", href: "https://www.linkedin.com/in/bagasaa/" }];