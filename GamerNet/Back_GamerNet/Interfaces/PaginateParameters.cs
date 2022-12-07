﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    using System;

    namespace Back_GamerNet.Interfaces
    {
        public class PaginateParameters
        {
            const int maxPageSize = 50;
            public int PageNumber { get; set; } = 1;

            private int _pageSize = 1;
            public int PageSize
            {
                get
                {
                    return _pageSize;
                }
                set
                {
                    _pageSize = (value > maxPageSize) ? maxPageSize : value;
                }
            }
        }
    }
}