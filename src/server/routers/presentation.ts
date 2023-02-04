import { z } from 'zod';
import {protectedProcedure, publicProcedure, router} from '../trpc';
import {createPresentationInput, createPresentationOutput} from "../schemas/presentation";
import {createPresentationResolver} from "../resolvers/presentation";
export const presentationRouter = router({
    createPresentation: protectedProcedure
        .input(createPresentationInput)
        .output(createPresentationOutput)
        .query(async ({ctx, input}) => await createPresentationResolver(ctx, input)),
});

// export type definition of API
export type PresentationRouter = typeof presentationRouter;