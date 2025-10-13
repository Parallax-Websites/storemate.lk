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
            <Head title="User, Contact & Product Management - Organize Your Store | StoreMate OMS">
                <meta name="description" content="Efficiently manage users, contacts, and products in one place. Organize your customer database, track product inventory, and manage team access with ease." />
                <meta name="keywords" content="user management, contact management, product management, inventory, customer database, team collaboration, store organization" />
            </Head>
            <Header auth={auth} />
            <UserContactProductHero auth={auth} />
            <UserContactProductFeatures />
            <UserManagement />
            <ProductManagement />
            <ContactManagement />
            <EasyOrganization />
            <Faq />
            <CallToAction />
            <Footer />
        </MainLayout>
    );
}
