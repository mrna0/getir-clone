import type { NextPage } from 'next';
import React from 'react';
import { Layout } from '../components/Layout/LayoutProducts';
import {HomeSliderGetirYemek} from '../components/HomeSliderGetirYemek';
import {Products} from '../components/Products';
import {GetirWidgetMobil} from '../components/GetirWidgetMobil';
import {CompanysProducts} from '../components/CompanysProducts';

const HomePage: NextPage = () => {
    return (
        <Layout title="Getir">
            
            <CompanysProducts/>
            <Products/>
            
            <GetirWidgetMobil/>
        </Layout>
    );
};

export default HomePage;
