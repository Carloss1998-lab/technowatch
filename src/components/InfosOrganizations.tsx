import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { IonContent, IonPage, IonHeader, IonLoading } from '@ionic/react';
import DisplayInfos from "./DisplayInfos";

interface InfosProps extends RouteComponentProps<{
    org: string,
}> { }


const InfosOrganizations: React.FC<InfosProps> = ({ match }) => {
    const [data, setData] = useState<any>();
    const [busy, setBusy] = useState<boolean>(true)

    useEffect(() => {
        fetch("https://api.github.com/search/repositories?q=org:" + match.params.org + "&sort=updated&order=desc&per_page=100", {
            method: "GET",
            headers: {
                'Authorization': "token 2944ac4205e293fce47c812989f7d998396b77cb"
            }
        })
            .then((resp) => resp.json())
            .then((resp_json) =>
                setData(resp_json)
            )
    }, [])

    return (
        <>
            <IonPage>
                <IonHeader>
                    <div>News on {match.params.org}</div>
                </IonHeader>
                {data ?
                    <IonContent>
                        <DisplayInfos total_count={data ? data.total_count : undefined} items={data.items} />
                    </IonContent> :

                    <IonLoading message="Loading..." duration={2000} isOpen={busy} />}
            </IonPage>
        </>)
}


export default InfosOrganizations;
