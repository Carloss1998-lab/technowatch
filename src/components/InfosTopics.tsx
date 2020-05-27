import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { IonContent, IonPage, IonHeader, IonLoading } from '@ionic/react';
import DisplayInfosTopics from './DisplayInfosTopics'

interface InfosProps extends RouteComponentProps<{
    topic: string,
}> { }


const InfosOrganizations: React.FC<InfosProps> = ({ match }) => {
    const [data, setData] = useState<any>();
    const [busy, setBusy] = useState<boolean>(true)

    useEffect(() => {
        fetch("https://api.github.com/search/topics?q=" + match.params.topic + "+is:featured'&sort=updated&order=desc", {
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
                    <div>Topics on {match.params.topic}</div>
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


export default InfosOrganizations;
