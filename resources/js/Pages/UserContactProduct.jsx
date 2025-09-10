import { Head } from '@inertiajs/react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import UserContactProductHero from '@/Components/User, Contact, Product/UserContactProductHero';
import Faq from '@/Components/Faq';
import CallToAction from '@/Components/CallToAction';
import UserContactProductFeatures from '@/Components/User, Contact, Product/UserContactProductFeatures';
import UserManagement from '@/Components/User, Contact, Product/UserManagement';
import ContactManagement from '@/Components/User, Contact, Product/ContactManagement';
import ProductManagement from '@/Components/User, Contact, Product/ProductManagement';
import EasyOrganization from '@/Components/User, Contact, Product/EasyOrganization';
import MainLayout from '@/Layouts/MainLayout';

export default function UserContactProduct({ auth }) {
    return (
        <MainLayout>
            <Head title="User, Contact, Product - Storemate OMS" />
            <Header auth={auth} />
            <UserContactProductHero auth={auth} />
            <UserContactProductFeatures />
            <UserManagement />
            <ContactManagement />
            <ProductManagement />
            <EasyOrganization />
            <Faq />
            <CallToAction />
            <Footer />
        </MainLayout>
    );
}
