// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as flows from '../flows.json'

export default function handler(req, res) {
    const flow = flows.default.find(x => x.id == req.query.id)
    res.status(200).json(flow)
}
