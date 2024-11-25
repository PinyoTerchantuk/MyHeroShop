import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

type DashboardProps = {
    color: string;
};

function Dashboard({ color }: DashboardProps) {
    const isLogin: boolean = true;

    // Array of images (replace with actual image URLs or paths)
    const images = [
        'https://inwfile.com/s-o/38vwu9.jpg', // Image 1
        'https://inwfile.com/s-o/ijugwp.jpg', // Image 2
        'https://down-th.img.susercontent.com/file/2e762375b4ad8cd903c21443118418d7', // Image 3
        'https://down-th.img.susercontent.com/file/sg-11134201-22100-1gvlg3zs76hvf4', // Image 4
        'https://dreamtoy.co.th/media/catalog/product/cache/d68a78be757bdca23b769dd800292e8d/7/0/7089655-1.jpg', // Image 5
        'https://down-th.img.susercontent.com/file/34d2b313ee2e6df156412279de9f2b08', // Image 6
    ];

    if (isLogin) {
        return (
            <>
                <h1>Welcome to Dashboard</h1>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)', // 3 columns
                        gap: '10px', // Space between images
                        margin: '20px 0',
                    }}
                >
                    {images.map((imgSrc, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                            {/* Image */}
                            <img
                                src={imgSrc}
                                alt={`Image ${index + 1}`}
                                style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }}
                            />
                            {/* Button under the image */}
                            <Link to={'/detail1'}>
                                <Button>Buy</Button>
                            </Link>
                        </div>
                    ))}
                </div>
            </>
        );
    } else {
        return (
            <button style={{ backgroundColor: color }}>
                Login
            </button>
        );
    }
}

export default Dashboard;
