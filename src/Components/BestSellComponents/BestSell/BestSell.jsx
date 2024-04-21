import PropTypes from 'prop-types';
const BestSell = ({ sell }) => {
    const { name, image } = sell;
    return (
        <div className='mt-8 mb-12 w-full rounded-lg shadow-xl hover:translate-y-4 transition-all duration-700'>
            <img className='w-[800px]' src={image} alt="" />
            <div className='py-6 px-5 '>
                <h3 className='font-bold mb-3'>{name}</h3>
                <p className='text-[14px]'>এই দরজা টি কিনতে স্ক্রীনশট নিয়ে Whatsapp এবং Facebook Page এ যোগাযোগ করুন</p>
            </div>
        </div>
    );
};

export default BestSell;

BestSell.propTypes = {
    sell: PropTypes.object.isRequired
};