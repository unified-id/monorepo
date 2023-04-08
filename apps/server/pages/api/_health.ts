import { NextApiResponse, NextApiRequest } from 'next'
import { NextTypedResponse } from 'types'

export default function handler(
	_req: NextApiRequest,
	res: NextApiResponse<NextTypedResponse<string>>
) {
	return res.status(200).json({
		statusCode: 200,
		data: 'OK'
	})
}