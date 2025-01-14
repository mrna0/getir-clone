import type { FC } from 'react';
import { Box } from '@material-ui/core';
import Image from 'next/image';
import'./navbar.module.scss';
const links={
    home:'/',
    yemek:'/yemek'
}
export const Navbar: FC = () => {
    
    return (
        <>
            <Box
                sx={{
                    height: '45px',
                    backgroundColor: 'primary.dark',
                    overflow: 'hidden',
                    paddingRight: '32px',
                    paddingLeft: '32px',
                }}
            >
                <div className='container'>
                    <div className='nav-list'>
                        <div className='nav-item'>
                            <a href={links.home}>
                                <Image
                                    src="/images/getir.svg"
                                    alt="getir logo"
                                    width={'36px'}
                                    height={16}
                                />
                            </a>
                           
                        </div>
                        <div className='nav-item'>
                            <a href={links.yemek}>
                                <Image
                                    src="/images/getir-yemek.svg"
                                    alt="getir yemek"
                                    width={'87px'}
                                    height={16}
                                />
                            </a>
                            
                        </div>
                        <div className='nav-item'>
                            <Image
                                src="/images/getir-su.svg"
                                alt="getir su"
                                width={'87px'}
                                height={16}
                            />
                        </div>
                        <div className='nav-item'>
                            <Image
                                src="/images/getir-buyuk.svg"
                                alt="getir büyük"
                                width={'87px'}
                                height={16}
                            />
                        </div>
                    </div>
                </div>
            </Box>
            <Box className='' sx={{ height: '80px', backgroundColor: 'primary.main' }}>
                <img className='getir_desktop-logo' src="/images/getir.svg" alt=""/>
                <input className='getir_search-input' type="text" />
            </Box>
            <Box className='getir_backgroud-img-products' sx={{ height: '80px', backgroundColor: 'primary.white' }}>
                <img className='getir_getir-bag' src="/images/bag.svg" alt=""/>
                <img className='getir_getir-bike' src="/images/bike.svg" alt=""/>
            </Box>
        </>
    );
};
