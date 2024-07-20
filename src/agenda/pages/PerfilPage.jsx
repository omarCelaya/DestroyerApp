import { AgendaLayout } from "../layout/AgendaLayout"
import { Header } from "../components/Header"
import { CServices } from "../components/CServices"
import { CBanner } from "../components/CBanner"
import { ContentLayout } from "../layout/ContentLayout"
import instalacion from '../img/instalacion-de-puertas.jpg';

export const PerfilPage = () => {
    return (
        <AgendaLayout>
            <Header />
            <CServices />
            <CBanner />
            <ContentLayout
                orden={1}
                body={"Destroyer Puertas Automáticas, SA de CV nace en el año de 1989 en Cuidad Obregón, Sonora, como una empresa pionera en el Valle del mismo nombre, ofreciendo servicios de suministro, instalación, mantenimiento y reparación de equipos residenciales, comerciales e industriales, tanto importados como nacionales, incluyendo motores para portones eléctricos; poco tiempo después incorporamos a nuestros productos la fabricación de puertas peatonales, rejas, canceles, puertas y portones automáticos en sus diversos tipos de apertura, y elaborados con diversos materiales como son el aluminio, la lámina, rejas en herrería y puertas de recuadro americano."}
                header={"Líderes en instalación y mantenimiento de puertas automáticas en Cuidad Obregón."}
                imagen={instalacion}
            />
        </AgendaLayout>
    )
}
