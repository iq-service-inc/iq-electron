import React from 'react'
import { useDispatch } from 'react-redux'
import { set_language } from 'actions'
import { FormattedMessage } from 'react-intl'
import Logo from '../Logo'

function Header() {
    const dispatch = useDispatch()

    const changeLang = e => {
        dispatch(set_language({ language: e.target.value }))
    }

    return <>
        <Logo />
        <h1>IQ - Electron</h1>
        <div className='banner'>
            <FormattedMessage id='global.language' defaultMessage='Language' />
            <span> : </span>
            <select onChange={changeLang}>
                <option value="zh">zh</option>
                <option value="en">en</option>
            </select>
        </div>
    </>
}

export default Header