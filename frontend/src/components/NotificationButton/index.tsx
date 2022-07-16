import axios from 'axios';
import Icon from '../../assets/img/icon-notification.svg';
import { BASE_URL } from '../../Utils/request';
import'./style.css'


type Props = {
    saleId: number;
}

function handleClick(id:number){
    axios.get(`${BASE_URL}/sales/${id}/notification`).then(response =>{
        console.log("Sucesso")
    })
}

function NotificationButton({saleId}:Props) {
    return (
        <>
            <div className="dsmeta-red-btn" onClick={()=> handleClick(saleId)}>
                <img src={Icon} alt="notificar"/>
            </div>
        </>
    )

}

export default NotificationButton;
