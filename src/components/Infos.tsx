import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { IonContent, IonPage, IonHeader, IonList, IonItem } from '@ionic/react';
import DisplayInfos from "./DisplayInfos";

interface InfosProps extends RouteComponentProps<{
    techno: string;
}> { }


const Infos: React.FC<InfosProps> = ({ match }) => {
    const [data, setData] = useState<any>();

    useEffect(() => {
        fetch("https://api.github.com/search/repositories?q=" + match.params.techno + "&sort=stars&order=desc")
            .then((resp) => resp.json())
            .then((resp_json) =>
                setData(resp_json)
            )
    }, [])

    console.log(data)

    return (
        <>
            <IonPage>
                <IonHeader>
                    <div>News on {match.params.techno}</div>
                </IonHeader>
                {data ?
                    <IonContent>
                        <DisplayInfos total_count={data ? data.total_count : undefined} items={data.items} />
                    </IonContent> :
                    <div>Loading...</div>
                }
            </IonPage>
        </>)
}


export default Infos;
