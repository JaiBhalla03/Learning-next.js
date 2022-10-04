import Link from 'next/Link'
import {Fragment} from 'react';

function Newspages(){
    return(
        <Fragment>
            <h1>News page</h1>
            <ul>
                <li><Link href="/news/nextjsGood">Next js good</Link></li>
                <li><Link href="/news/nextjsBad">Next js Bad</Link></li>
            </ul>
        </Fragment>
    )
}

export default Newspages;