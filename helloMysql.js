//the skeleton of this code is taken from the templates provided at https://github.com/wolfordj/CS290-Server-Side-Examples

var express = require('express');
var mysql = require('./dbcon.js');
var bodyParser = require('body-parser');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 46538);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/',function(req,res,next){
  var context = {};
  mysql.pool.query('SELECT * FROM Pf_Class', function(err, rows, fields){
    if(err){
      next(err);
      return;
    }
    context = JSON.stringify(rows);
    //res.send(context);
    //context.results = rows;
    //res.send(context.results);
    res.render('home');

  });
});

app.get('/table',function(req,res,next){
    var context = {};
    mysql.pool.query('SELECT * FROM Pf_Class', function(err, rows, fields) {
        if (err) {
            next(err);
            return;
        }
        //}
        context = JSON.stringify(rows);
        //context.results = "Inserted id " + result.insertId;
        res.send(context);
        //res.render('home', context);
    });
});

app.get('/viewClass',function(req,res,next){
    var context = {};
    mysql.pool.query('SELECT * FROM Pf_Class', function(err, rows, fields) {
        if (err) {
            next(err);
            return;
        }
        context = JSON.stringify(rows);
        res.send(context);
    });
});

app.get('/viewBook',function(req,res,next){
    var context = {};
    mysql.pool.query('SELECT * FROM Pf_Book', function(err, rows, fields) {
        if (err) {
            next(err);
            return;
        }
        context = JSON.stringify(rows);
        res.send(context);
    });
});

app.get('/viewSpell',function(req,res,next){
    var context = {};
    mysql.pool.query('SELECT * FROM Pf_Spell', function(err, rows, fields) {
        if (err) {
            next(err);
            return;
        }
        context = JSON.stringify(rows);
        res.send(context);
    });
});

app.get('/viewWeapon',function(req,res,next){
    var context = {};
    mysql.pool.query('SELECT * FROM Pf_Weapon', function(err, rows, fields) {
        if (err) {
            next(err);
            return;
        }
        context = JSON.stringify(rows);
        res.send(context);
    });
});

app.get('/viewClass_Spell',function(req,res,next){
    var context = {};
    mysql.pool.query('SELECT * FROM Pf_Class_Spell', function(err, rows, fields) {
        if (err) {
            next(err);
            return;
        }
        context = JSON.stringify(rows);
        res.send(context);
    });
});

app.get('/viewClass_Weapon',function(req,res,next){
    var context = {};
    mysql.pool.query('SELECT * FROM Pf_Class_Weapon', function(err, rows, fields) {
        if (err) {
            next(err);
            return;
        }
        context = JSON.stringify(rows);
        res.send(context);
    });
});

app.get('/insertClass',function(req,res,next){
  var context = {};
  mysql.pool.query("INSERT INTO Pf_Class (`Class_Name`, `Skill_Points`, `Hit_Dice`, `Pf_Book_ID`) VALUES (?, ?, ?, ?)",
      [req.query.Class_Name, req.query.Skill_Points, req.query.Hit_Dice, req.query.Pf_Book_ID], function(err, result) {
          if (err) {
              next(err);
              return;
          }

  mysql.pool.query('SELECT * FROM Pf_Class', function(err, rows, fields) {
      if (err) {
          next(err);
          return;
      }
      context = JSON.stringify(rows);
      res.send(context);
  });
  });
});

app.get('/insertBook',function(req,res,next){
    var context = {};
    mysql.pool.query("INSERT INTO Pf_Book (`Book_Name`, `Total_Page_Number`) VALUES (?, ?)",
        [req.query.Book_Name, req.query.Total_Page_Number], function(err, result) {
            if (err) {
                next(err);
                return;
            }

            mysql.pool.query('SELECT * FROM Pf_Book', function(err, rows, fields) {
                if (err) {
                    next(err);
                    return;
                }
                context = JSON.stringify(rows);
                res.send(context);
            });
        });
});

app.get('/insertSpell',function(req,res,next){
    var context = {};
    mysql.pool.query("INSERT INTO Pf_Spell (`Spell_Name`, `Spell_Type`, `Pf_Book_ID`) VALUES (?, ?, ?)",
        [req.query.Spell_Name, req.query.Spell_Type, req.query.Pf_Book_ID], function(err, result) {
            if (err) {
                next(err);
                return;
            }

            mysql.pool.query('SELECT * FROM Pf_Spell', function(err, rows, fields) {
                if (err) {
                    next(err);
                    return;
                }
                context = JSON.stringify(rows);
                res.send(context);
            });
        });
});

app.get('/insertWeapon',function(req,res,next){
    var context = {};
    mysql.pool.query("INSERT INTO Pf_Weapon (`Weapon_Name`, `Damage`, `Weapon_Type`, `Pf_Book_ID`) VALUES (?, ?, ?, ?)",
        [req.query.Weapon_Name, req.query.Damage, req.query.Weapon_Type, req.query.Pf_Book_ID], function(err, result) {
            if (err) {
                next(err);
                return;
            }

            mysql.pool.query('SELECT * FROM Pf_Weapon', function(err, rows, fields) {
                if (err) {
                    next(err);
                    return;
                }
                context = JSON.stringify(rows);
                res.send(context);
            });
        });
});

app.get('/insertClass_Spell',function(req,res,next){
    var context = {};
    mysql.pool.query("INSERT INTO Pf_Class_Spell (`Pf_Class_ID`, `Pf_Spell_ID`) VALUES (?, ?)",
        [req.query.Pf_Class_ID, req.query.Pf_Spell_ID], function(err, result) {
            if (err) {
                next(err);
                return;
            }

            mysql.pool.query('SELECT * FROM Pf_Class_Spell', function(err, rows, fields) {
                if (err) {
                    next(err);
                    return;
                }
                context = JSON.stringify(rows);
                res.send(context);
            });
        });
});

app.get('/insertClass_Weapon',function(req,res,next){
    var context = {};
    mysql.pool.query("INSERT INTO Pf_Class_Weapon (`Pf_Class_ID`, `Pf_Weapon_ID`) VALUES (?, ?)",
        [req.query.Pf_Class_ID, req.query.Pf_Weapon_ID], function(err, result) {
            if (err) {
                next(err);
                return;
            }

            mysql.pool.query('SELECT * FROM Pf_Class_Weapon', function(err, rows, fields) {
                if (err) {
                    next(err);
                    return;
                }
                context = JSON.stringify(rows);
                res.send(context);
            });
        });
});

app.get('/deleteClass',function(req,res,next){
  var context = {};
  mysql.pool.query("DELETE FROM Pf_Class WHERE id=?", [req.query.id], function(err, result){
    if(err){
      next(err);
      return;
    }
      mysql.pool.query('SELECT * FROM Pf_Class', function(err, rows, fields) {
          if (err) {
              next(err);
              return;
          }
          context = JSON.stringify(rows);
          res.send(context);
      });
  });
});

app.get('/deleteBook',function(req,res,next){
    var context = {};
    mysql.pool.query("DELETE FROM Pf_Book WHERE id=?", [req.query.id], function(err, result){
        if(err){
            next(err);
            return;
        }

        mysql.pool.query('SELECT * FROM Pf_Book', function(err, rows, fields) {
            if (err) {
                next(err);
                return;
            }
            context = JSON.stringify(rows);
            res.send(context);
        });
    });
});

app.get('/deleteSpell',function(req,res,next){
    var context = {};
    mysql.pool.query("DELETE FROM Pf_Spell WHERE id=?", [req.query.id], function(err, result){
        if(err){
            next(err);
            return;
        }

        mysql.pool.query('SELECT * FROM Pf_Spell', function(err, rows, fields) {
            if (err) {
                next(err);
                return;
            }
            context = JSON.stringify(rows);
            res.send(context);
        });
    });
});

app.get('/deleteWeapon',function(req,res,next){
    var context = {};
    mysql.pool.query("DELETE FROM Pf_Weapon WHERE id=?", [req.query.id], function(err, result){
        if(err){
            next(err);
            return;
        }

        mysql.pool.query('SELECT * FROM Pf_Weapon', function(err, rows, fields) {
            if (err) {
                next(err);
                return;
            }
            context = JSON.stringify(rows);
            res.send(context);
        });
    });
});

app.get('/deleteClass_Spell',function(req,res,next){
    var context = {};
    mysql.pool.query("DELETE FROM Pf_Class_Spell WHERE Pf_Class_ID = ? && Pf_Spell_ID = ?",
        [req.query.Pf_Class_ID, req.query.Pf_Spell_ID], function(err, result){
        if(err){
            next(err);
            return;
        }
        mysql.pool.query('SELECT * FROM Pf_Class_Spell', function(err, rows, fields) {
            if (err) {
                next(err);
                return;
            }
            context = JSON.stringify(rows);
            res.send(context);
        });
    });
});

app.get('/deleteClass_Weapon',function(req,res,next){
    var context = {};
    mysql.pool.query("DELETE FROM Pf_Class_Weapon WHERE Pf_Class_ID = ? && Pf_Weapon_ID = ?",
        [req.query.Pf_Class_ID, req.query.Pf_Weapon_ID], function(err, result){
            if(err){
                next(err);
                return;
            }
            mysql.pool.query('SELECT * FROM Pf_Class_Weapon', function(err, rows, fields) {
                if (err) {
                    next(err);
                    return;
                }
                context = JSON.stringify(rows);
                res.send(context);
            });
        });
});

app.get('/editClass',function(req,res,next){
  var context = {};
  mysql.pool.query("SELECT * FROM Pf_Class WHERE id=?", [req.query.id], function(err, result){
    if(err){
      next(err);
      return;
    }
    if(result.length == 1) {
        var curVals = result[0];
        mysql.pool.query("UPDATE Pf_Class SET Class_Name=?, Skill_Points=?, Hit_Dice=?, Pf_Book_ID=? WHERE id=? ",
            [req.query.Class_Name || curVals.Class_Name, req.query.Skill_Points || curVals.Skill_Points, req.query.Hit_Dice || curVals.Hit_Dice, req.query.Pf_Book_ID || curVals.Pf_Book_ID, req.query.id],
            function (err, result) {
                if (err) {
                    next(err);
                    return;
                }
            });
    }
            mysql.pool.query('SELECT * FROM Pf_Class', function(err, rows, fields) {
                if (err) {
                    next(err);
                    return;
                }
                context = JSON.stringify(rows);
                res.send(context);
            });
  });
});

app.get('/editBook',function(req,res,next){
    var context = {};
    mysql.pool.query("SELECT * FROM Pf_Book WHERE id=?", [req.query.id], function(err, result){
        if(err){
            next(err);
            return;
        }
        if(result.length == 1) {
            var curVals = result[0];
            mysql.pool.query("UPDATE Pf_Book SET Book_Name=?, Total_Page_Number=? WHERE id=? ",
                [req.query.Book_Name || curVals.Book_Name, req.query.Total_Page_Number || curVals.Total_Page_Number, req.query.id],
                function (err, result) {
                    if (err) {
                        next(err);
                        return;
                    }
                });
        }
        mysql.pool.query('SELECT * FROM Pf_Book', function(err, rows, fields) {
            if (err) {
                next(err);
                return;
            }
            context = JSON.stringify(rows);
            res.send(context);
        });
    });
});

app.get('/editSpell',function(req,res,next){
    var context = {};
    mysql.pool.query("SELECT * FROM Pf_Spell WHERE id=?", [req.query.id], function(err, result){
        if(err){
            next(err);
            return;
        }
        if(result.length == 1) {
            var curVals = result[0];
            mysql.pool.query("UPDATE Pf_Spell SET Spell_Name=?, Spell_Type=?, Pf_Book_ID=? WHERE id=? ",
                [req.query.Spell_Name || curVals.Spell_Name, req.query.Spell_Type || curVals.Spell_Type, req.query.Pf_Book_ID || curVals.Pf_Book_ID, req.query.id],
                function (err, result) {
                    if (err) {
                        next(err);
                        return;
                    }
                });
        }
        mysql.pool.query('SELECT * FROM Pf_Spell', function(err, rows, fields) {
            if (err) {
                next(err);
                return;
            }
            context = JSON.stringify(rows);
            res.send(context);
        });
    });
});

app.get('/editWeapon',function(req,res,next){
    var context = {};
    mysql.pool.query("SELECT * FROM Pf_Weapon WHERE id=?", [req.query.id], function(err, result){
        if(err){
            next(err);
            return;
        }
        if(result.length == 1) {
            var curVals = result[0];
            mysql.pool.query("UPDATE Pf_Weapon SET Weapon_Name=?, Damage=?, Weapon_Type=?, Pf_Book_ID=? WHERE id=? ",
                [req.query.Weapon_Name || curVals.Weapon_Name, req.query.Damage || curVals.Damage, req.query.Weapon_Type || curVals.Weapon_Type, req.query.Pf_Book_ID || curVals.Pf_Book_ID, req.query.id],
                function (err, result) {
                    if (err) {
                        next(err);
                        return;
                    }
                });
        }
        mysql.pool.query('SELECT * FROM Pf_Weapon', function(err, rows, fields) {
            if (err) {
                next(err);
                return;
            }
            context = JSON.stringify(rows);
            res.send(context);
        });
    });
});

app.get('/editClass_Spell',function(req,res,next){
    var context = {};
    mysql.pool.query("SELECT * Pf_Class_Spell WHERE Pf_Class_ID = ? && Pf_Spell_ID = ?",
        [req.query.Pf_Class_ID, req.query.Pf_Spell_ID], function(err, result){
        if(err){
            next(err);
            return;
        }
        if(result.length == 1) {
            var curVals = result[0];
            mysql.pool.query("UPDATE Pf_Class_Spell SET Pf_Class_ID=?, Pf_Spell_ID=?",
                [req.query.Pf_Class_ID || curVals.Pf_Class_ID, req.query.Pf_Spell_ID || curVals.Pf_Spell_ID],
                function (err, result) {
                    if (err) {
                        next(err);
                        return;
                    }
                });
        }
        mysql.pool.query('SELECT * FROM Pf_Class_Spell', function(err, rows, fields) {
            if (err) {
                next(err);
                return;
            }
            context = JSON.stringify(rows);
            res.send(context);
        });
    });
});

app.get('/editClass_Weapon',function(req,res,next){
    var context = {};
    mysql.pool.query("SELECT * Pf_Class_Weapon WHERE Pf_Class_ID = ? && Pf_Weapon_ID = ?",
        [req.query.Pf_Class_ID, req.query.Pf_Weapon_ID], function(err, result){
            if(err){
                next(err);
                return;
            }
            if(result.length == 1) {
                var curVals = result[0];
                mysql.pool.query("UPDATE Pf_Class_Spell SET Pf_Class_ID=?, Pf_Weapon_ID=?",
                    [req.query.Pf_Class_ID || curVals.Pf_Class_ID, req.query.Pf_Weapon_ID || curVals.Pf_Weapon_ID],
                    function (err, result) {
                        if (err) {
                            next(err);
                            return;
                        }
                    });
            }
            mysql.pool.query('SELECT * FROM Pf_Class_Weapon', function(err, rows, fields) {
                if (err) {
                    next(err);
                    return;
                }
                context = JSON.stringify(rows);
                res.send(context);
            });
        });
});

app.get('/class_usable_weapons',function(req,res,next){
    var context = {};
    mysql.pool.query('SELECT Class_Name, Weapon_Name FROM Pf_Class c ' +
        'INNER JOIN Pf_Class_Weapon cw ON c.id = cw.Pf_Class_ID ' +
        'INNER JOIN Pf_Weapon w ON cw.Pf_Weapon_ID = w.id ' +
        'WHERE cw.Pf_Class_ID = ?',
        [req.query.Pf_Class_ID], function(err, rows, fields) {
        if (err) {
            next(err);
            return;
        }
        context = JSON.stringify(rows);
        res.send(context);
    });
});

app.get('/class_usable_spells',function(req,res,next){
    var context = {};
    mysql.pool.query('SELECT Class_Name, Spell_Name FROM Pf_Class c ' +
        'INNER JOIN Pf_Class_Spell cs ON c.id = cs.Pf_Class_ID ' +
        'INNER JOIN Pf_Spell s ON cs.Pf_Spell_ID = s.id ' +
        'WHERE cs.Pf_Class_ID = ?',
        [req.query.Pf_Class_ID], function(err, rows, fields) {
            if (err) {
                next(err);
                return;
            }
            context = JSON.stringify(rows);
            res.send(context);
        });
});

//this call is taken from the HW Assignment: Database interactions and UI assignment description
app.get('/reset-table',function(req,res,next){
    var context = {};
    mysql.pool.query("DROP TABLE IF EXISTS workouts", function(err){
        var createString = "CREATE TABLE workouts("+
            "id INT PRIMARY KEY AUTO_INCREMENT,"+
            "name VARCHAR(255) NOT NULL,"+
            "reps INT,"+
            "weight INT,"+
            "date DATE,"+
            "lbs BOOLEAN)";
        mysql.pool.query(createString, function(err){
            context.results = "Table reset";
            res.render('home',context);
        })
    });
});

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on flip3.engr.oregonstate.edu:' + app.get('port') + '; press Ctrl-C to terminate.');
});
