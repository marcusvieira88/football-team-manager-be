import {GraphQLBoolean, GraphQLNonNull} from 'graphql';
import periodType from '../../types/period/update-input-period';
import PeriodSchema from '../../../models/PeriodSchema';
import Helpers from '../../../utils/Helpers';

export default {
    type: GraphQLBoolean,
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(periodType)
        }
    },
    async resolve (root, params, options) {
        Helpers.checkUserUnauthorized(context);

        const updatedPeriod = await PeriodSchema.findOneAndUpdate(
            params.data.id, params.data);

        if (!updatedPeriod) {
            throw new Error('Error updating new period');
        }
        return true;
    }
};
