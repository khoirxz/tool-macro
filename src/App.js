import { useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

import Navbar from "./components/Navbar";
import InputForm from "./components/InputForm";

import KotaJawa from "./data/KotaJawa";
import KotaBali from "./data/KotaBali";
import KotaKalimantanSulawesi from "./data/KotaKalimantanSulawesi";

import { listKategory } from "./Kategori";

import "./styles.css";

export default function App() {
  const [judul, setJudul] = useState("");
  const [harga, setHarga] = useState(0);
  const [hargaDiskon, setHargaDsikon] = useState(0);
  const [deskripsi, setDeskripsi] = useState("");
  const [label, setLabel] = useState("");
  const [kategori, setKategori] = useState("");
  const [kondisi, setKondisi] = useState("Baru");
  const [jeda, setJeda] = useState(0);
  const [isKota, setIsKota] = useState("kota1");
  const [gambar1, setGambar1] = useState("");
  const [gambar2, setGambar2] = useState("");
  const [gambar3, setGambar3] = useState("");
  const [gambar4, setGambar4] = useState("");
  const [gambar5, setGambar5] = useState("");
  const [gambar6, setGambar6] = useState("");
  const [gambar7, setGambar7] = useState("");
  const [gambar8, setGambar8] = useState("");
  const [gambar9, setGambar9] = useState("");
  const [gambar10, setGambar10] = useState("");

  return (
    <div className="App">
      <Navbar />

      <Box sx={{ my: 5, maxWidth: "800px", mx: "auto" }}>
        {/* Judul field */}
        <InputForm
          title="Judul"
          state={judul}
          setState={setJudul}
          inputType="text"
        />
        {/* Harga field */}
        <InputForm
          title="Harga"
          state={harga}
          setState={setHarga}
          inputType="number"
        />
        {/* Harga Diskon field */}
        <InputForm
          title="Harga Diskon"
          state={hargaDiskon}
          setState={setHargaDsikon}
          inputType="number"
        />
        {/* Deskripsi field */}
        <TextField
          label="Deskripsi"
          variant="outlined"
          fullWidth={true}
          defaultValue={deskripsi}
          rows={5}
          sx={{ mb: 3 }}
          multiline
          onChange={(e) => setDeskripsi(e.target.value)}
        />

        {/* Kota field */}
        <FormControl sx={{ mb: 1.2 }}>
          <FormLabel id="kota">Pilih kota:</FormLabel>
          <RadioGroup
            aria-labelledby="kota"
            name="RadioKota"
            row
            defaultValue="kota1"
            onChange={(e) => setIsKota(e.target.value)}
          >
            <FormControlLabel
              value="kota1"
              control={<Radio />}
              label="Kota 1"
            />
            <FormControlLabel
              value="kota2"
              control={<Radio />}
              label="Kota 2"
            />
            <FormControlLabel
              value="kota3"
              control={<Radio />}
              label="Kota 3"
            />
          </RadioGroup>
        </FormControl>
        <FormControl size="medium" sx={{ mb: 2 }} fullWidth>
          <InputLabel id="Kondisi">Kondisi</InputLabel>
          <Select
            labelId="Kondisi"
            label="kondisi"
            value={kondisi}
            onChange={(e) => setKondisi(e.target.value)}
          >
            <MenuItem value="Baru">Baru</MenuItem>
            <MenuItem value="Bekas - Seperti Baru">
              Bekas - Seperti Baru
            </MenuItem>
            <MenuItem value="Bekas - Baik">Bekas - Baik</MenuItem>
            <MenuItem value="Bekas - Cukup Baik">Bekas - Cukup Baik</MenuItem>
          </Select>
        </FormControl>
        {/* Kategori field */}
        <FormControl size="medium" sx={{ mb: 2 }} fullWidth>
          <InputLabel id="Kategori">Kategori</InputLabel>
          <Select
            labelId="Kategori"
            label="Kategori"
            onChange={(e) => setKategori(e.target.value)}
          >
            <MenuItem value="semua">Pilih semua</MenuItem>
            {listKategory.map((item, key) => (
              <MenuItem value={item} key={key}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {/* Jeda field */}
        <InputForm
          title="Jeda"
          state={jeda}
          setState={setJeda}
          inputType="number"
        />
        {/* Label field */}
        <InputForm
          title="Label"
          state={label}
          setState={setLabel}
          inputType="text"
        />
        {/* Gambar1 - Gambar10 field */}
        <>
          <InputForm
            title="gambar1"
            state={gambar1}
            setState={setGambar1}
            inputType="text"
          />
          <InputForm
            title="gambar2"
            state={gambar2}
            setState={setGambar2}
            inputType="text"
          />
          <InputForm
            title="gambar3"
            state={gambar3}
            setState={setGambar3}
            inputType="text"
          />
          <InputForm
            title="gambar4"
            state={gambar4}
            setState={setGambar4}
            inputType="text"
          />
          <InputForm
            title="gambar5"
            state={gambar5}
            setState={setGambar5}
            inputType="text"
          />
          <InputForm
            title="gambar6"
            state={gambar6}
            setState={setGambar6}
            inputType="text"
          />
          <InputForm
            title="gambar7"
            state={gambar7}
            setState={setGambar7}
            inputType="text"
          />
          <InputForm
            title="gambar8"
            state={gambar8}
            setState={setGambar8}
            inputType="text"
          />
          <InputForm
            title="gambar9"
            state={gambar9}
            setState={setGambar9}
            inputType="text"
          />
          <InputForm
            title="gambar10"
            state={gambar10}
            setState={setGambar10}
            inputType="text"
          />
        </>

        {/* end of gambar field */}

        {/* Download button */}
        {isKota === "kota1" ? (
          <>
            <KotaJawa
              headers={headers}
              judul={judul}
              deskripsi={deskripsi}
              harga={harga}
              hargaDiskon={hargaDiskon}
              kategori={kategori}
              jeda={jeda}
              kondisi={kondisi}
              label={label}
              gambar1={gambar1}
              gambar2={gambar2}
              gambar3={gambar3}
              gambar4={gambar4}
              gambar5={gambar5}
              gambar6={gambar6}
              gambar7={gambar7}
              gambar8={gambar8}
              gambar9={gambar9}
              gambar10={gambar10}
            />
          </>
        ) : isKota === "kota2" ? (
          <KotaBali
            headers={headers}
            judul={judul}
            deskripsi={deskripsi}
            harga={harga}
            hargaDiskon={hargaDiskon}
            jeda={jeda}
            kategori={kategori}
            label={label}
            kondisi={kondisi}
            gambar1={gambar1}
            gambar2={gambar2}
            gambar3={gambar3}
            gambar4={gambar4}
            gambar5={gambar5}
            gambar6={gambar6}
            gambar7={gambar7}
            gambar8={gambar8}
            gambar9={gambar9}
            gambar10={gambar10}
          />
        ) : isKota === "kota3" ? (
          <KotaKalimantanSulawesi
            headers={headers}
            judul={judul}
            deskripsi={deskripsi}
            hargaDiskon={hargaDiskon}
            jeda={jeda}
            harga={harga}
            kategori={kategori}
            label={label}
            kondisi={kondisi}
            gambar1={gambar1}
            gambar2={gambar2}
            gambar3={gambar3}
            gambar4={gambar4}
            gambar5={gambar5}
            gambar6={gambar6}
            gambar7={gambar7}
            gambar8={gambar8}
            gambar9={gambar9}
            gambar10={gambar10}
          />
        ) : null}
      </Box>
    </div>
  );
}

const headers = [
  { label: "Judul Produk", key: "Judul" },
  { label: "Harga Produk", key: "Harga" },
  { label: "Harga Diskon", key: "HargaDiskon" },
  { label: "Deskripsi", key: "Deskripsi" },
  { label: "Kategori", key: "Kategori" },
  { label: "Lokasi", key: "Lokasi" },
  { label: "Jeda", key: "Jeda" },
  { label: "Kondisi", key: "Kondisi" },
  { label: "Label", key: "Label" },
  { label: "Gambar1", key: "Gambar1" },
  { label: "Gambar2", key: "Gambar2" },
  { label: "Gambar3", key: "Gambar3" },
  { label: "Gambar4", key: "Gambar4" },
  { label: "Gambar5", key: "Gambar5" },
  { label: "Gambar6", key: "Gambar6" },
  { label: "Gambar7", key: "Gambar7" },
  { label: "Gambar8", key: "Gambar8" },
  { label: "Gambar9", key: "Gambar9" },
  { label: "Gambar10", key: "Gambar10" },
];
