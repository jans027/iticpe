import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


//Este componente utiliza el hook useLocation de React Router para obtener
//la ruta actual de la página.Luego, utiliza el hook useEffect para actualizar
//la posición de desplazamiento de la ventana a(0, 0) cada vez que la ruta cambia.
function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default ScrollToTop;
