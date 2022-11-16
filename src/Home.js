import React from 'react';
import './Home.css';
import Banner from './Banner'
import Card from './Card'

// ES7 snippets to do 'rfce'

function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className='home__section'>
            <Card
                src="https://www.palaciodeaviles.com/wp-content/uploads/2020/03/lista-de-bodas.jpg"
                title="Bodas"
                description="Delciosos banquetes para tu evento especial."
            />
            <Card
                src="https://elmanana.com.mx/wp-content/uploads/2019/12/Pixelmakers-001.jpg"
                title="XV años"
                description="Descubre que tan fácil será elegir tu platillo ideal."
            />
            <Card
                src="https://s.ineventos.com/blog/2021/100060/014412-1080w.jpg"
                title="Bautizos"
                description="Conoce el detalle de los alimentos que ofrecerás."
            />
            </div>
            <div className='home__section'>
            <Card
                src="https://i0.wp.com/laplanner.mx/uploads/2017/06/proveedores-de-banquetes-en-mexico-hacienda-de-los-morales-2.jpg?resize=1280%2C853&ssl=1"
                title="Servicio tres tiempos y dos bebidas."
                description="Banquetes Hernandez"
                price="$380/Platillo"
            />
            <Card
                src="https://static.wixstatic.com/media/0d3ba3_da8ec93ecc0e4198aee0768b2a1c23da~mv2_d_1944_1296_s_2.jpg"
                title="Buffet brunch mexicano (antes del medio día)."
                description="Banquetes Hernandez"
                price="$16,750/Buffet"
            />
            <Card
                src="https://images.dissapore.com/wp-content/uploads/2020/03/cocktail-analcolici-famosi-scaled.jpg"
                title="Servicio de coctelería por 4 horas."
                description="La Doña SMA"
                price="$20,300/Coctelería"
            />
            </div>
        </div>
    )
}

export default Home
