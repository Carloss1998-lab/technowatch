import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { IonContent, IonPage, IonHeader, IonList, IonItem, IonLoading } from '@ionic/react';
import DisplayInfos from "./DisplayInfos";

interface InfosProps extends RouteComponentProps<{
    search: string;
}> { }


const InfosResearch: React.FC<InfosProps> = ({ match }) => {
    const [data, setData] = useState<any>();
    const [busy, setBusy] = useState<boolean>(true)

    useEffect(() => {
        fetch("https://api.github.com/search/repositories?q=" + match.params.search + "&sort=updated&order=desc")
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
                    <div>News on {match.params.search}</div>
                </IonHeader>
                {data ?
                    <IonContent>
                        <DisplayInfos total_count={data ? data.total_count : undefined} items={data.items} />
                    </IonContent> :

                    <IonLoading message="Loading..." duration={2000} isOpen={busy} />}
                }
            </IonPage>
        </>)
}


export default InfosResearch;
