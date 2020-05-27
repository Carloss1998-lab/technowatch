import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { IonContent, IonPage, IonHeader, IonList, IonItem, IonLoading } from '@ionic/react';
import DisplayInfosTopics from "./DisplayInfosTopics";

interface InfosProps extends RouteComponentProps<{
    search: string,
    heading: string;
}> { }


const InfosResearch: React.FC<InfosProps> = ({ match }) => {
    const [data, setData] = useState<any>();
    const [busy, setBusy] = useState<boolean>(true)
    useEffect(() => {
        fetch("https://api.github.com/search/topics?q=" + match.params.search + "+is:featured'&sort=updated&order=desc", {
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
    console.log(data)

    return (
        <>
            <IonPage>
                <IonHeader>
                    <div>News on {match.params.search}</div>
                </IonHeader>
                {data ?
                    <IonContent>
                        <DisplayInfosTopics items={data.items} />
                    </IonContent> :

                    <IonLoading message="Loading..." duration={2000} isOpen={busy} />}
                }
            </IonPage>
        </>)
}


export default InfosResearch;
