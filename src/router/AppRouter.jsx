import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { HeroesRoutes } from '../heroes/';
import { LoginPage } from '../auth/';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={<LoginPage />} />
                
                {/*
                    Cuando no queremos que se muestre algún componente como en este caso que no quiero que en este login se muestre el navbar, creamos otra ruta que redireccione a otro screen o componente donde si tengo establecida todas las rutas con los componentes que quiero que se muestren
                */}
                
                <Route path='*' element={<HeroesRoutes />} />
            </Routes>
           
        </>
    )
}
