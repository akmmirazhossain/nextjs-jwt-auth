import { NextApiRequest, NextApiResponse } from "next";
import jwt from 'jsonwebtoken'


const KEY = 'hfhrfwefshthygndbdgdf'

export default function (req: NextApiRequest, res: NextApiResponse) {

    if (!req.body) {
        res.statusCode = 404
        res.end('Error')
        return
    }



    const { username, password } = req.body;



    //console.log(req.body)

    //JWT verify
    res.json({

        token: jwt.sign(
            {
                username,
                loggedin: username === 'miraz' && password === '1234'
            },KEY)
    })
    
}

