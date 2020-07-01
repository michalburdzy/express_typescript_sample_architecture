import { Request, Response } from 'express';
import { HttpStatuses } from 'core-package';

export default (req: Request, res: Response): Response => res.sendStatus(HttpStatuses.OK);
