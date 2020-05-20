import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { IonContent, IonPage, IonHeader, IonList, IonItem } from '@ionic/react';
import DisplayInfos from "./DisplayInfos";
import DisplayInfosDetails from './DisplayInfosDetail';

interface DetailsInfosProps extends RouteComponentProps<{
    techno: string,
    techno_item: string,
    repository: string,
    login: string;
}> { }




const InfosDetails: React.FC<DetailsInfosProps> = ({ match }) => {

    const [data, setData] = useState<any>();
    const [readme, setReadMe] = useState<any>();

    useEffect(() => {
        fetch(" https://api.github.com/repos/" + match.params.login + "/" + match.params.techno_item)
            .then((resp) => resp.json())
            .then((resp_json) =>
                setData(resp_json)
            )
    }, [])

    useEffect(() => {
        fetch("https://api.github.com/repos/Pegdwende649/Ensai_projet_info/readme")
            .then((resp) => resp.json())
            .then((resp_json) =>
                setReadMe(resp_json.download_url)
            )
    }, [])

    console.log(data)


    return (
        <IonPage>

            {data ?
                <IonContent>
                    <DisplayInfosDetails name={data ? data.name : undefined} description={data ? data.description : undefined} owner={data ? data.owner : undefined} readme={readme ? readme : undefined} />
                </IonContent> :
                <div>Loading...</div>
            }
        </IonPage>
    )
}

export default InfosDetails;
