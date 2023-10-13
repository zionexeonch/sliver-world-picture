import { Head } from "@inertiajs/react";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Main from "@/Layouts/Admin/Main";
import Chart from "chart.js/auto";
import axios from "axios";

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

    const generatePDF = async () => {
        const response = await axios.get("/admin/reports");
        const blob = new Blob([response.data], { type: "application/pdf" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "report.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <>
            <Head title={title} />
            <div className="container p-4 lg:my-4 lg:mx-auto text-white">
                <h1 className="text-2xl font-bold mb-5">
                    Welcome to Admin Dashboard
                </h1>
                <canvas
                    id="myChart"
                    width="400"
                    height="200"
                    className="mb-4"
                ></canvas>
                <button
                    onClick={generatePDF}
                    className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
                >
                    Generate PDF
                </button>
            </div>
        </>
    );
};
Admin.layout = (page) => <Main children={page} />;
export default Admin;
