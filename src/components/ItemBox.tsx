import './css/ItemBox.css';

function ItemBox({img_src, item_name}: {img_src: string, item_name: string}){
    return(
        <div className="ItemContainer">
            <div className="ItemBox">
                <img src={img_src}></img>
            </div>
            <div>{item_name}</div>
        </div>
    );
}

export default ItemBox;