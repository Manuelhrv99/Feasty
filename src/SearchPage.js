import React from 'react';
import './SearchPage.css';
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p>5 resultados · 100 invitados</p>
                <h1>Tu banquete ideal</h1>
                <Button variant="outlined">Cancelación Gratis</Button>
                <Button variant="outlined">Por Tipo de Evento</Button>
                <Button variant="outlined">Menor Precio</Button>
                <Button variant="outlined">Mayor Precio</Button>
                <Button variant="outlined">Más Filtros</Button>
            </div>

            <SearchResult
                img="https://i0.wp.com/laplanner.mx/uploads/2017/06/proveedores-de-banquetes-en-mexico-hacienda-de-los-morales-2.jpg?resize=1280%2C853&ssl=1"
                location="León, Guanajuato"
                title="Servicio tres tiempos y dos bebidas."
                description="Entrada · Plato Fuerte · Postre · Aperitivo · Digestivo"
                star={4.73}
                price="$380/Platillo"
                total="$38,000 total"
            />

            <SearchResult
                img="https://blablaocio.com/wp-content/uploads/sites/7/2020/01/Matiz-2.jpg"
                location="León, Guanajuato"
                title="Servicio seis tiempos y cuatro bebidas."
                description="Entrada · Plato Fuerte · Postre · Aperitivo · Digestivo · 2 Cortesias · 2 Tragos"
                star={4.3}
                price="$520/Platillo"
                total="$52,000 total"
            />

            <SearchResult
                img="https://static.wixstatic.com/media/0d3ba3_da8ec93ecc0e4198aee0768b2a1c23da~mv2_d_1944_1296_s_2.jpg"
                location="León, Guanajuato"
                title="Buffet brunch mexicano (antes del medio día)."
                description="Antojitos mexicanos · Especial mezcalitas"
                star={3.8}
                price="$16,750/Buffet"
                total="$16,750 total"
            />
            <SearchResult
                img="https://images.dissapore.com/wp-content/uploads/2020/03/cocktail-analcolici-famosi-scaled.jpg"
                location="León, Guanajuato"
                title="Servicio de coctelería por 4 horas."
                description="4 horas de servicio · Incluye meseros"
                star={4.1}
                price="$20,300/Coctelería"
                total="$20,300 total"
            />
            <SearchResult
                img="http://rolandowhite.com/wp-content/uploads/2019/04/MaryTierra1.jpg"
                location="León, Guanajuato"
                title="Platillo mar y tierra."
                description="400 Gr. de Rib Eye · Camarones a la diabla"
                star={5.0}
                price="$280/Platillo"
                total="$28,000 total"
            />
            
        </div>
    )
}

export default SearchPage
