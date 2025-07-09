import { useState } from "react";
import Header from "../components/header";
import { Button } from "../components/ui/button";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const PencarianData = () => {
    const [activeMenuItem, setActiveMenuItem] = useState('Cari');

    return(
        <div>
            {/* Header Section */}
            <Header
                activeMenuItem={activeMenuItem}
                setActiveMenuItem={setActiveMenuItem}
            />
            {/* Main Content */}
            <div className="max-w-[1124px] mt-[98px] mx-auto">
                <h2 className="text-center text-xl font-bold"><u>Pencarian Data</u></h2>
                <form action="" className="mt-[39px] w-[1128px] bg-[#EEF2F6] pt-[29px] rounded-[10px]">
                    <div className="mx-[43px] mb-[25px] flex justify-between">
                        <input type="text" placeholder="Enter Document Number" className="w-[499px] h-[37px] border-2 border-black pl-[10px] rounded-[10px]"/>
                        <input type="text" placeholder="Enter Company Name" className="w-[499px] h-[37px] border-2 border-black pl-[10px] rounded-[10px]"/>
                    </div>
                    <Button className="font-bold mx-[43px] mb-[29px] w-[1042px] bg-[#ADB5DB] text-black shadow-md hover:bg-[#0077B6] hover:text-white">Cari</Button>
                </form>

                <Table className="border-2 border-black mt-[39px]">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Nomor Surat</TableHead>
                            <TableHead>Nama Perusahaan</TableHead>
                            <TableHead>Tanggal Pembelian</TableHead>
                            <TableHead>Status Pembayaran</TableHead>
                            <TableHead>Metode Pembayaran</TableHead>
                            <TableHead>File Nota Pembelian</TableHead>
                            <TableHead className="text-right">Update Data</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">INV001</TableCell>
                            <TableCell>PT.Cari Masukan Sini Indonesia</TableCell>
                            <TableCell>Credit Card</TableCell>
                            <TableCell>PAID</TableCell>
                            <TableCell>Transfer via BCA</TableCell>
                            <TableCell>001-cmsi-purchase.pdf</TableCell>
                            <TableCell className="text-right"><Button variant="destructive">Update</Button></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">INV002</TableCell>
                            <TableCell>PT.Cari Masukan Sini Indonesia</TableCell>
                            <TableCell>Credit Card</TableCell>
                            <TableCell>PAID</TableCell>
                            <TableCell>Transfer via BCA</TableCell>
                            <TableCell>002-cmsi-purchase.pdf</TableCell>
                            <TableCell className="text-right"><Button variant="destructive">Update</Button></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default PencarianData;