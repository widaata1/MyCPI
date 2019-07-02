const database = require('../services/database.js');

const baseQuery = 
`select
    rtrim(eqno) as "WORK_CENTRE",
    rtrim(itemno) as "ITEMNO",
    rtrim(substr(descrip,1,40)) as "DESCRIPTION",
    workorder_id,
    partstogo,
    ltrim(to_char(hours_left,'999.99')) as "HOURS_LEFT",
    ltrim(to_char(std_cycle,'999.99')) as "STD_CYCLE",
    ltrim(to_char(avg_cycle,'999.99')) as "AVG_CYCLE",
    ltrim(to_char(last_cycle,'999.99')) as "LAST_CYCLE",
    actcav,
    stdcav,
    ltrim(to_char(shift_up,'99.99')) as "SHIFT_UP",
    ltrim(to_char(shift_dwn,'99.99')) as "SHIFT_DWN",
    down_code,
    rtrim(down_descrip) as "DOWN_DESCRIP",
    orderno,
    substr(priority_note,1,50) as "PRIORITY_NOTE",
    rtrim(substr(cntr_desc,1,30)) as "CNTR_DESC"
from
    v_rt_part_numbers
where
    work_center_id in (5212,
    5217,
    5222,
    5259,
    5261,
    5291,
    5272,
    5275,
    5279,
    5281,
    5300,
    5210,
    5215,
    5216,
    5218,
    5223,
    5226,
    5228,
    5257,
    5260,
    5262)
order by
    cntr_desc asc`;

async function find(context) {
    let query = baseQuery;
    const binds = [];

    if (context.id) {
        binds.push(context.id);

        query += `\nand rtrim(eqno) in (:bv1)`;
    }
    
    const result = await database.simpleExecute(query, binds);
    return result.rows;
}

module.exports.find = find;