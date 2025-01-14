import { FC } from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import {FiGlobe} from 'react-icons/fi';
export const Footer: FC = () => {
    return (
        <div className="md:block bg-white pt-10 md:pb-6 pb-0">
        <div className="md:ml-40 md:mr-40 gap-y-5">
            <div className="grid md:grid-cols-4 grid-cols-1 pl-5 md:pl-0">
                <nav>
                    <h3 className="text-lg text-purple-700 mb-4">
                        Getir`i indirin!
                    </h3>
                    <ul className="grid gap-y-3">
                        <li>
                            <a href="#">
                                <img
                                    src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
                                    alt=""/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img
                                    src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
                                    alt=""/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img
                                    src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
                                    alt=""/>
                            </a>
                        </li>
                    </ul>
                </nav>
                <nav>
                    <h3 className="text-lg text-purple-700 mb-4">
                        Getir`i keşfedin
                    </h3>
                    <ul className="grid gap-y-3 text-sm mb-8">
                        <li>
                            <a href="#" className="hover:underline">Hakkımızda</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Kariyer</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">İletişim</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">COVID-19 Duyuru</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Sosyal Sorumluluk Projeleri</a>
                        </li>
                    </ul>
                </nav>
                <nav>
                    <h3 className="text-lg text-purple-700 mb-4">
                        Yardıma mı ihtiyacınız var?
                    </h3>
                    <ul className="grid gap-y-3 text-sm mb-8">
                        <li>
                            <a href="#" className="hover:underline">Sıkça Sorulan Sorular</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Kişisel Verilerin Korunması</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Gizlilik Politikası</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Kullanım Koşulları</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Çerez Politikası</a>
                        </li>
                    </ul>
                </nav>
                <nav>
                    <h3 className="text-lg text-purple-700 mb-4">
                        İş Ortağımız Olun
                    </h3>
                    <ul className="grid gap-y-3 text-sm mb-8">
                        <li>
                            <a href="#" className="hover:underline">Bayimiz Olun</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Deponuzu Kiralayın</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">GetirYemek Restoranı Olun</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">GetirÇarşı İşletmesi Olun</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="h-[1px] bg-gray-100 hidden md:block"></div>
            <div className="xs:block md:flex justify-between text-sm pt-3 mt-5 text-center bg-gray-100 md:bg-transparent">
                <div className="xs:block md:flex gap-x-4 text-gray-700 xs:text-center">
                    &copy; 2021 Getir
                    <div className="mt-2 md:mt-0">
                        <a href="#" className="text-purple-800 hover:underline">Bilgi Toplumu Hizmetleri</a>
                    </div>
                </div>
                <nav className="flex gap-x-2 items-center justify-center p-3">
                    <a href="#" className="hidden transition-colors w-8 h-8 md:flex items-center justify-center rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-700">
                        <FaFacebook size={20} />
                    </a>
                    <a href="#" className="hidden transition-colors w-8 h-8 md:flex items-center justify-center rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-700">
                        <FaTwitter size={20} />
                    </a>
                    <a href="#" className="hidden transition-colors w-8 h-8 md:flex items-center justify-center rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-700">
                        <FaInstagram size={20} />
                    </a>
                    <a href="#" className="bg-white transition-colors h-8 flex items-center gap-x-2 border border-gray-100 rounded-lg text-sm text-gray-600 px-3 hover:bg-purple-50 hover:text-purple-700">
                        <FiGlobe size={18} />
                        Türkçe (TR)
                    </a>
                </nav>
            </div>
        </div>
    </div>
    );
};
