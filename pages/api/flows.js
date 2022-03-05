// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as flows from './flows.json'

export default function handler(req, res) {
    res.status(200).json(flows.default)
}
