import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { IonContent, IonPage, IonHeader, IonList, IonItem, IonLoading } from '@ionic/react';
import DisplayInfos from "./DisplayInfos";

interface InfosProps extends RouteComponentProps<{
    search: string,
    heading: string;
}> { }


const InfosResearch: React.FC<InfosProps> = ({ match }) => {
    const [data, setData] = useState<any>();
    const [busy, setBusy] = useState<boolean>(true)
    useEffect(() => {
        fetch("https://api.github.com/search/repositories?q=topic:" + match.params.search + "&sort=updated&order=desc&per_page=100", {
            method: "GET",
            headers: {
                'Accept': 'application/vnd.github.mercy-preview+json',
                'Authorization': "token 2944ac4205e293fce47c812989f7d998396b77cb"
            }
        })
            .then((resp) => resp.json())
            .then((resp_json) => { setData(resp_json) }

            )
    }, [])

    return (
        <>
            <IonPage>
                <IonHeader>
                    <div>News on {match.params.search}</div>
                </IonHeader>
                {data ?
                    <IonContent>
                        <DisplayInfos items={data.items} />
                    </IonContent> :

                    <IonLoading message="Loading..." duration={2000} isOpen={busy} />}
                }
            </IonPage>
        </>)
}


export default InfosResearch;
