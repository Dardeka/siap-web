import { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "../components/header";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const UnggahData = () => {
    const [activeMenu, setActiveMenu] = useState('Unggah');

    return(
        <div>
            {/* Header Section */}
            <Header
            activeMenuItem={activeMenu}
            setActiveMenuItem={setActiveMenu}
            />
            {/* Main content */}
            <div className="max-w-[1124px] mt-[98px] mx-auto">
                <h2 className="text-center text-xl font-bold"><u>Form Unggah Data</u></h2>
                <form action="" className="mt-[30px] mb-[30px] px-[45px] py-[48px] flex items-top bg-[#D9D9D9] rounded-[10px]">
                    {/* text-input section */}
                    <div className="font-bold">
                        {/* Document Number */}
                        <div className="flex flex-col mb-[14px]">
                            <label htmlFor="nomorSurat">Nomor Surat</label>
                            <input type="text" placeholder="Enter Document Number" className="bg-white w-[499px] h-[37px] mt-[5px] border-2 border-black pl-[5px] rounded-[10px]"/>
                        </div>
                        {/* Company name */}
                        <div className="flex flex-col mb-[14px]">
                            <label htmlFor="nomorSurat">Nama Perusahaan</label>
                            <input type="text" placeholder="Enter Company name" className="bg-white w-[499px] h-[37px] mt-[5px] border-2 border-black pl-[5px] rounded-[10px]"/>
                        </div>
                        {/* Purchase Date */}
                        <div className="flex flex-col mb-[14px]">
                            <label htmlFor="nomorSurat">Tanggal Pembelian</label>
                            <input type="text" placeholder="Enter Purchase Date" className="bg-white w-[499px] h-[37px] mt-[5px] border-2 border-black pl-[5px] rounded-[10px]"/>
                        </div>
                        {/* Payment Status */}
                        <div className="flex flex-col mb-[14px]">
                            <label htmlFor="nomorSurat">Apakah sudah membayar?</label>
                            <div id="radio" className="flex justify-between w-[150px] font-medium">
                                <div id="sudah">
                                    <input type="radio" name="Sudah" id="Sudah" className="mr-[10px]"/>
                                    <label htmlFor="">Sudah</label>
                                </div>
                                <div id="belum">
                                    <input type="radio" name="Belum" id="Belum" className="mr-[10px]"/>
                                    <label htmlFor="">Belum</label>
                                </div>
                            </div>
                        </div>

                        {/* Payment Method */}
                        <div id="method">
                            <label htmlFor="">Pilih metode pembayaran</label>
                            <Select>
                                <SelectTrigger className="w-[250px] bg-white border-black">
                                    <SelectValue placeholder="Pilih metode pembayaran" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="bca">Transfer via BCA</SelectItem>
                                    <SelectItem value="bri">Transfer via BRI</SelectItem>
                                    <SelectItem value="mandiri">Transfer via Mandiri</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    {/* image-input section */}
                    <div className="flex flex-col ml-[140px] w-[423px] h-[437px]">
                        <label class="bg-white w-full h-[358px] mb-auto flex flex-col justify-center rounded-[20px] cursor-pointer" id="dropBox">
                            <input type="file" name="upload" id="dropFile" accept="application/pdf" hidden/>
                            <img id="upImage" src="others/upload.png" alt="" class="w-[125px] mx-auto"/>
                            <span id="spanText" class="mx-auto font-semibold">Unggah nota pembelian disini <br />(.pdf)</span>
                            <div id="preview"></div>
                        </label>
                        <div id="buttons" className="w-full mt-[29px] flex justify-end pr-[15px]">
                            <Button variant="destructive">Cancel</Button>
                            <Button className="bg-green-600 ml-[10px]">Submit</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UnggahData;