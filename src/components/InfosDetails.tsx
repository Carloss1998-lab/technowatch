import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { IonContent, IonPage, IonLoading } from '@ionic/react';
import DisplayInfosDetails from './DisplayInfosDetail';


interface DetailsInfosProps extends RouteComponentProps<{
    techno: string,
    techno_item: string,
    repository: string,
    login: string,
    heading: string;

}> { }




const InfosDetails: React.FC<DetailsInfosProps> = ({ match }) => {

    const [data, setData] = useState<any>();
    const [readme, setReadMe] = useState<any>();
    const [busy, setBusy] = useState<boolean>(true)




    useEffect(() => {
        fetch(" https://api.github.com/repos/" + match.params.login + "/" + match.params.techno_item, {
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



    useEffect(() => {
        fetch("https://api.github.com/repos/" + match.params.login + "/" + match.params.techno_item + "/readme", {
            method: "GET",
            headers: {
                'Authorization': "token 2944ac4205e293fce47c812989f7d998396b77cb"
            }
        })
            .then((resp) => resp.json())
            .then((resp_json) => {
                resp_json.content ?
                    setReadMe(decodeURIComponent(escape(window.atob(resp_json.content)))) :
                    setReadMe(resp_json.content)
            }

            )
    }, [])




    return (
        <IonPage>

            {data ?
                <IonContent>
                    <DisplayInfosDetails
                        updated_at={data ? data.updated_at : undefined}
                        created_at={data ? data.created_at : undefined}
                        language={data ? data.language : undefined}
                        clone_url={data ? data.clone_url : undefined}
                        name={data ? data.name : undefined}
                        description={data ? data.description : undefined}
                        owner={data ? data.owner : undefined}
                        readme={readme ? readme : undefined} />

                </IonContent> :
                <IonLoading message="Loading..." duration={2000} isOpen={busy} />}

        </IonPage>
    )
}

export default InfosDetails;
