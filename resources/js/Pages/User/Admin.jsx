import { Head, router } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Main from "@/Layouts/Admin/Main";
import { Chart } from "chart.js";

const Admin = ({ title, reports }) => {
    useEffect(() => {
        AOS.refresh();
    }, []);

    useEffect(() => {
        // Inisialisasi Chart.js di sini
        const ctx = document.getElementById("myChart").getContext("2d");
        new Chart(ctx, {
            type: "bar",
            data: {
                labels: [
                    "Users",
                    "Anime Downloads",
                    "Manga Downloads",
                    "Movie Downloads",
                ],
                datasets: [
                    {
                        label: "Total",
                        data: [
                            reports.users,
                            reports.anime_downloads,
                            reports.manga_downloads,
                            reports.movie_downloads,
                        ],
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 206, 86, 0.2)",
                            "rgba(75, 192, 192, 0.2)",
                        ],
                        borderColor: [
                            "rgba(255, 99, 132, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(255, 206, 86, 1)",
                            "rgba(75, 192, 192, 1)",
                        ],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1,
                        },
                    },
                },
            },
        });
    }, [reports]);

    const generatePDF = () => {
        const canvas = document.getElementById("myChart");
        const dataURL = canvas.toDataURL();

        // Tambahkan hari, tanggal, tahun
        const today = new Date();
        const formattedDate = today.toLocaleDateString();

        // Kirim data untuk membuat PDF ke backend
        // Contoh menggunakan Axios
        axios
            .post("/generate-pdf", { dataURL, formattedDate })
            .then((response) => {
                // Tanggapi respons dari backend (mungkin menampilkan tautan untuk mengunduh PDF)
            })
            .catch((error) => {
                console.error(error);
            });
    };
    return (
        <>
            <Head title={title} />
            <div className="container mx-auto mt-10 text-white">
                <h1 className="text-2xl font-bold mb-5">
                    Welcome to Admin Dashboard
                </h1>
                <canvas id="myChart" width="400" height="200"></canvas>
                <button onClick={generatePDF}>Generate PDF</button>
            </div>
        </>
    );
};
Admin.layout = (page) => <Main children={page} />;
export default Admin;
