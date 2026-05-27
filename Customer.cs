using System;
using System.Collections.Generic;

namespace WebApplication2;

public partial class Customer
{
    public long Id { get; set; }

    public string Name { get; set; } = null!;

    public string Email { get; set; } = null!;
}
