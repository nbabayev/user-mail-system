import React from 'react'
import { Content } from 'antd/lib/layout/layout'
import CampaignTable from '../components/CampaignTable'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

const CampaignMenu = () => {
    return (
        <Content style={{ padding: '0 50px' }}>
            <div className='d-flex align-items-center justify-content-between' >
                <h1 >Campaign Menu</h1>
                <Link to="./mail-thread">
                    <Button type="primary" shape="default" style={{ background: "green" }}>
                        New Thread
                    </Button>
                </Link>

            </div>
            <CampaignTable />
        </Content>
    )
}

export default CampaignMenu