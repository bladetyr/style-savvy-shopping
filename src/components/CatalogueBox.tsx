import ItemBox from './ItemBox.tsx';
// image imports
import shirt_img from '../assets/jcpenney_shirt.png';
import pants_img from '../assets/jcpenney_pants.png';
import shoes_img from '../assets/jcpenney_shoes.png';
import ad_banner from '../assets/SS_Banner.png';
// css
import './css/CatalogueBox.css';

function CatalogueBox(){
    return(
        <div style={{marginTop: '2%'}}>
            <img src={ad_banner} width='90%'></img>
            <div style={{display: 'flex', flexDirection: 'row', width: '60%', marginTop: '2%'}}>
                <span style={{animation: "fadeIn 1s ease-in-out forwards"}}><ItemBox img_src={shirt_img} item_name="Shirts"/></span>
                <span style={{animation: "fadeIn 1.7s ease-in-out forwards"}}><ItemBox img_src={pants_img} item_name="Pants"/></span>
                <span style={{animation: "fadeIn 2.5s ease-in-out forwards"}}><ItemBox img_src={shoes_img} item_name="Shoes"/></span>
            </div>
            <br></br>
            {/*This should objectively be a component yes but it's just one tiny thing so I left it alone */}
            <div style={{display: 'flex', color: '#747474', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ebecf067', width: '89.5%', height: '5%', border: 'solid 3px', borderRadius: '3%', borderColor: '#BEBEBE', marginTop: '3%'}}>
            Style Savvy IP and assets © Nintendo. Clothing assets and images © JCPenneys. This fan-work is for fun only.
            </div>
        </div>
    );
}

export default CatalogueBox;