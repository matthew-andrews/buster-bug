# buster-bug

A demonstration of a bug in the Buster JS version v0.6.12.

## See the bug...

```
git clone git@github.com:matthew-andrews/buster-bug.git
npm install
buster-test
```

### Expected output

```
1 test case, 1 test, 1 assertion, 0 failures, 0 errors, 0 timeouts
```


### Actual output

```
Error: async Slightly adapted async test from Buster docs
    undefined

1 test case, 1 test, 1 assertion, 0 failures, 1 error, 0 timeouts
```

