import React from 'react';
import parse from 'html-react-parser';

const Subscribe = () => {
    const htmlString = `<section class="subscribe-section pull-down">
 <div class=auto-container>
 <div class="outer-box wow fadeInLeft" style=visibility:hidden;animation-name:none>
 <div class="bg bg-image" style=background-image:url("/images/extracted/asset_58.webp")></div>
 <div class=row>
 <div class="content-column col-lg-7">
 <div class=inner-column>
 <figure class=image><img src="/images/extracted/asset_28.png" alt=Image></figure>
 <h4 class=title>Subscribe our newsletter To get updates</h4>
 </div>
 </div>
 <div class="form-column col-lg-5">
 <div class=inner-column>
 <div class=subscribe-form>
 <form method=post action=forms.php>
 <div class=form-group>
 <div class=input-outer> <i class="icon fal fa-envelope"></i>
 <input type=email name=email required pattern=[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$ placeholder="Your Email" value>
 </div>
 <button type=submit name=subscribe class=read-more><i class="icon fa fa-paper-plane"></i></button>
 </div>
 </form>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>`;
    return (
        <>
            {parse(htmlString)}
        </>
    );
};

export default Subscribe;
